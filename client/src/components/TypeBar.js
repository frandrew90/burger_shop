import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const { food } = useContext(Context);
  console.log("before", food);

  return (
    <>
      <ListGroup>
        {food.types.map((type) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            key={type.id}
            // active={type.id === food.selectedType.id}
            onClick={() => {
              food.setSelectedType(type);
              // console.log(food.types);
            }}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
});

export default TypeBar;
