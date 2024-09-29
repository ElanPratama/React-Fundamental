import { Button } from "@nextui-org/react"
import React, { useState } from "react"


// ini cara functional komponen (rekomendasikan menggunakan ini)
// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const incrementCounter = () => {
//         setCount(count + 1)
//     };

//     const decrementCounter = () => {
//         setCount(count - 1)
//     }

//     return (
//         <div>
//             <div className="flex items-center justify-around min-h-96">
//             <Button onClick={decrementCounter} color="danger">Substract</Button>
//             <span className="text-3xl font-semibold">{count}</span>
//             <Button onClick={incrementCounter} color="primary">Add</Button>
//         </div>
//      </div>
//     )
// }


// ini cara class komponen
class Counter extends React.Component{

    state = {
        count : 0,
    }

    incrementCounter = () => {
        this.setState({count: this.state.count + 1})
    }

    decrementCounter = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return(
        <div>
            <div className="flex items-center justify-around min-h-96">
            <Button onClick={this.decrementCounter} color="danger">
                Substract
            </Button>
            <span className="text-3xl font-semibold">{this.state.count}</span>
            <Button onClick={this.incrementCounter} color="primary">
                Add
            </Button>
           </div>
      </div>
      )
    }
}

export default Counter