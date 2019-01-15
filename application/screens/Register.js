import React, {Component} from 'react';
import {View} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import {Card} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import FormValidation from '../utils/validation';
import firebaseConfig from '../utils/firebase';
import * as firebase from 'firebase';
import t from 'tcomb-form-native';

const Form = t.form.Form;


export default class Register extends Component{
	
	constructor(){
		
		super();
		
		this.state ={
			
			user: {}
		}
		
		this.samePassword = t.refinement(t.String, (s)=>{
			
			return s === this.state.password
		});
		
		this.user = t.struct({
			
			email: FormValidation.email,
			password: FormValidation.password,
			password_confirmation: this.samePassword
			
		});
		
		this.options = {
			
			fields: {
				
				email:	{
					
					help: 'Introduce tu e-mail',
					error: 'E-mail incorrecto',
					autoCapitalize: 'none'
				},
				password:	{
					
					help: 'Introduce un password',
					error: 'Password incorrecto',
					password: true,
					secureTextEntry: true
					
				},
				password_confirmation:	{
					
					help: 'Introduce un password',
					error: 'Password incorrecto',
					password: true,
					secureTextEntry: true
					
				}
			}
		};
		
		
		this.validate = null;
	}
	
	
	register(){
		
		this.validate = this.refs.form.getValue();
		
		if(this.validate){
			firebase.auth().createUserWithEmailAndPassword(
				this.validate.email, this.validate.password
			).then(() => {
				
				Toast.showWithGravity('Registro correcto. Bienvenido', Toast.LONG, Toast.BOTTOM);
			})
			.catch(err => {
				
				Toast.showWithGravity(err.message, Toast.LONG, Toast.BOTTOM);
				
			})
			
			
		}
		
	}
	
	onchange(user){
		
		this.setState({user});
		this.validate = this.refs.form.getValue();
		
		
		
	}
	
	render(){
		
		return (
			
			<BackgroundImage source = {require('../../assets/images/app-bg.png')}>
			<View>
						<Card title="Regístrate">
							<Form
								ref='form'
								type={this.user}
								options={this.options}
								onChange={(v)=>this.onChange(v)}
								value={this.state.user}
							/>
						
							<AppButton
								bgColor="#92ddc8"
								title="Registrarme"
								action={this.register.bind(this)}
								iconName="user-plus"
								iconSize={30}
								iconColor="#fff"
							/>
						</Card>
				</View>
	
			</ BackgroundImage>
		
		);
		
	}
	
	
}