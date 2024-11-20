import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { CreateFormInterface } from "../../interfaces";
import { AiOutlineDelete } from "react-icons/ai";

interface propsInterface {
  forms: CreateFormInterface[];
  onDeleteHandler(index: number): any;
}
const FormValueListComponent = ({ forms, onDeleteHandler }: propsInterface) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    //   TODO: got error on this package;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided): any => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col gap-2 p-4 bg-gray-100"
          >
            {forms.map((item, index) => (
              <Draggable
                key={item?.name}
                draggableId={item?.name}
                index={index}
              >
                {(provided, snapshot): any => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`flex justify-between p-4 rounded cursor-pointer ${
                      snapshot.isDragging ? "bg-blue-300" : "bg-red-200"
                    }`}
                  >
                    <div className={"flex flex-col "}>
                      <span>Name:{item?.name}</span>
                      <span>Type:{item?.type}</span>
                    </div>
                    <div>
                      <AiOutlineDelete
                        className={"text-red-500 cursor-pointer"}
                        onClick={() => onDeleteHandler(index)}
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default FormValueListComponent;
