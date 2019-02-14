import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
]

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price}</strong>Ft</p>
    {controls.map(ctrl =>(
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        dedicted={() => props.ingredientDedicted(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered} >Order the burger</button>
  </div>
)

export default buildControls;