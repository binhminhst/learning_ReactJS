import React from 'react';
import './Customer.css';  
 
const { render } = ReactDOM; 

/*
var data = [
	{
		"ID": 1,
		"FAB_RIC": "Silk",
		"FAMILY": "Accessorie",
		"TYPE": "Bag",
		"MISA_CODE": "M001336_4TH",
		"DESC": "MARIE JO-SILK--BLUE LANTERNS",
		"PRICE": "950000" 
	},
	{
		"ID": 2,
		"FAB_RIC": "Silk",
		"FAMILY": "Accessorie",
		"TYPE": "Bag",
		"MISA_CODE": "M001346_4TH",
		"DESC": "AMY-SILK--BLACK FOREST",
		"PRICE": "2250000"   
	},
 	{
		"ID": 3,
		"FAB_RIC": "Cotton",
		"FAMILY": "Accessorie",
		"TYPE": "Bird cage",
		"MISA_CODE": "M001400_4TH",
		"DESC": "BIRD CAGE-SILK--A THOUSAND LIGHTS",
		"PRICE": "1590000"
	},
	{
		"ID": 4,
		"FAB_RIC": "Cotton",
		"FAMILY": "Accessorie",
		"TYPE": "Necklace",
		"MISA_CODE": "M001383_4TH",
		"DESC": "CAMEO-SILK--A THOUSAND LIGHTS",
		"PRICE": "810000"  	 	
	}
]; */


 
class APP_show_json extends React.Component{ 
	
	constructor(props) {
        super(props);
        this.state = { persons: [] };
    }
    
     componentDidMount() {
		 
        fetch('http://localhost/learning_laravel_api/api/public/api/shop/show',{
			 
				//mode: 'no-cors',
				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json', 
				},
				
		}).then((data) => {
				 this.setState({persons: data.results })  
				console.log('AAA', data.result );
				  
		}).catch(function (ex) {
				console.log('BBB', ex);
        }) 
		 
    }   
	 
	 render() {
		
			return(
				<div className="body-page">
					<div className="title-page">Example First About ReactJS</div>
					<div className="title-table-list-product" >The list product</div>
					<div className="table" >
						<div className="header_table" >
							<div className="col_table">ID</div>
							<div className="col_table">FAB_RIC</div>
							<div className="col_table">FAMILY</div>
							<div className="col_table">TYPE</div>
							<div className="col_table">MISA_CODE</div>
							<div className="col_table">DESC</div>
							<div className="col_table">PRICE</div> 
						</div> 
						 
					</div>
				</div>
			); 
			 
	}   	
	
}
		 
	  /*	var	Rows = data.map(function(item) {	 
				return  <div className="header_table, clear_both" key={item.ID}>
							<div className="col_table">{item.ID}</div>
							<div className="col_table">{item.FAB_RIC}</div>
							<div className="col_table">{item.FAMILY}</div>
							<div className="col_table">{item.TYPE}</div>
							<div className="col_table">{item.MISA_CODE}</div>
							<div className="col_table">{item.DESC}</div>
							<div className="col_table">{item.PRICE}</div> 
						</div>
										
		}); 
		
		 
		var Rows = this.state.persons.map(function(item){
				return  <div className="header_table, clear_both" key={item.id}>
							<div className="col_table">{item.id}</div>
							<div className="col_table">{item.fab_ric}</div>
							<div className="col_table">{item.family}</div>
							<div className="col_table">{item.type}</div>
							<div className="col_table">{item.misa_code}</div>
							<div className="col_table">{item.desc}</div>
							<div className="col_table">{item.price}</div> 
						</div>
										
		}); */

export default APP_show_json ;