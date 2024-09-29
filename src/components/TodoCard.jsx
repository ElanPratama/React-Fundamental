import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";

const TodoCard = (props) => {
    return(
        <Card className="max-w-[400px]">
            <CardHeader className="font-bold text-lg">{props.day} ({props.numberOfActifities})</CardHeader>
            <Divider />
            <CardBody>
            <ul className="list-decimal list-inside">
                 <li>mandi</li>
                 <li>ngoding</li>
                 <li>ngudud</li>
             </ul>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button>Finish</Button>
            </CardFooter>
        </Card>
    )
}

export default TodoCard;