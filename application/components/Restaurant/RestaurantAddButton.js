import React, {Component} from 'react';
import AppButton from '../AppButton';
import {StyleSheet,View} from 'react-native';

export default class RestaurantAddButton extends Component{
	
	render (){
		
		const {addRestaurant} = this.props;
		
		return(
		
			<View style = {styles.buttonContainer}>
				<AppButton
					bgColor="#484848"
					title="Añadir un restaurante"
					action={addRestaurant}
					iconName='plus'
					iconColor='#fff'
				/>
			
			</View>
		);
		
		
	}
	
}


const styles = StyleSheet.create({
	
	buttonContainer:{
		position: 'absolute',
		alignSelf: 'flex-end',
		bottom: 0,
		
		
	}
	
})