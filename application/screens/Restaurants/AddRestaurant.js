import React, {Component} from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import AppButton from '../../components/AppButton';
import {View, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import t from 'tcomb-form-native';
import {Card} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {options, Restaurant} from '../../forms/restaurant';
const Form = t.form.Form;

export default class AddRestaurant extends Component{
	
	constructor(){
		
		super();
		this.state ={
			restaurant:{
				nombre : '',
				addres: '',
				capacity: 0,
				description:''
			}
		};
	}
	
	save(){
		
		
	}
	
	
	
	onChange(restaurant){
		
		this.setState(restaurant);
	}
	
	render (){
		
		return(
			<BackgroundImage source={require('../../../assets/images/app-bg.png')}>
				<View style={styles.container}>
					<Card title="Formulario de restaurantes">
						<View>
							<Form
								ref="form"
								type={Restaurant}
								options={options}
								value={restaurant}
								onChange={(v)=>this.onChange(v)}
							/>
						</View>
						<AppButton
							bgColor='#92ddc8'
							title="Dar de alta"
							action={this.save.bind(this)}
							iconName="plus"
							iconSize={30}
							iconColor="#FFF"
						/>
					</Card>
				</View>
			</BackgroundImage>
		
		);
	}
	
}

const styles = StyleSheet.create({
	
	container: {
		
		backgroundColor: 'rgba(231,228,224,0.8)',
		padding: 10
		
	}
	
})

