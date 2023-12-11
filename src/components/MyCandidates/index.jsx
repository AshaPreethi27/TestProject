import "./styles.css";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

function MyCandidates() {
  const appliedList = [
    {
      id: "1",
      name: "Simon Torres",
      designation: "Store Manager",
      profileimg:
        "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    },
    {
      id: "2",
      name: "Mila Norman",
      designation: "Branch Manager",
      profileimg:
        "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    },
    {
      id: "3",
      name: "Taylor Gomez",
      designation: "Analyst Manager",
      profileimg:
        "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    },
    {
      id: "4",
      name: "Adelynn Ward",
      designation: "Store Manager",
      profileimg:
        "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    },
  ];

  const secondList = [
    {
      id: "5",
      name: "Myla Clark",
      designation: "Store Manager",
      profileimg:
        "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    },
    {
      id: "6",
      name: "Malcolm Harris",
      designation: "Branch Manager",
      profileimg:
        "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    },
    {
      id: "7",
      name: "Alana Lindsey",
      designation: "Branch Manager",
      profileimg:
        "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    },
    {
      id: "8",
      name: "Clayton mccarty",
      designation: "Branch Manager",
      profileimg:
        "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    },
  ];

  const [list, setList] = useState(appliedList);
  const [interestedList, setInterestedList] = useState(secondList);
  const [shortlist, setShortlist] = useState([]);
  const [rejectedlist, setRejectedlist] = useState([]);

  const onEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (
      source.droppableId === "interestedId" &&
      destination.droppableId === "appliedId"
    ) {
      return;
    }
    if (
      source.droppableId === "shortlistedId" &&
      destination.droppableId === "interestedId"
    ) {
      return;
    }
    if (
      source.droppableId === "shortlistedId" &&
      destination.droppableId === "appliedId"
    ) {
      return;
    }
    if (
      source.droppableId === "rejectedId" &&
      destination.droppableId === "appliedId"
    ) {
      return;
    }
    if (
      source.droppableId === "rejectedId" &&
      destination.droppableId === "interestedId"
    ) {
      return;
    }
    if (
      source.droppableId === "rejectedId" &&
      destination.droppableId === "shortlistedId"
    ) {
      return;
    }

    let add;
    if (source.droppableId === "appliedId") {
      add = list[source.index];
      list.splice(source.index, 1);
    }
    if (source.droppableId === "shortlistedId") {
      add = shortlist[source.index];
      shortlist.splice(source.index, 0);
    }
    if (source.droppableId === "rejectedId") {
      add = rejectedlist[source.index];
      rejectedlist.splice(source.index, 0);
    }
    if (source.droppableId === "interestedId") {
      add = interestedList[source.index];
      interestedList.splice(source.index, 0);
    }

    if (destination.droppableId === "appliedId") {
      list.splice(destination.index, 0, add);
    }
    if (destination.droppableId === "shortlistedId") {
      shortlist.splice(destination.index, 0, add);
    }
    if (destination.droppableId === "rejectedId") {
      rejectedlist.splice(destination.index, 0, add);
    }
    if (destination.droppableId === "interestedId") {
      interestedList.splice(destination.index, 0, add);
    }

    let addon;
    if (source.droppableId === "interestedId") {
      addon = interestedList[source.index];
      interestedList.splice(source.index, 1);
    }
    if (source.droppableId === "shortlistedId") {
      addon = shortlist[source.index];
      shortlist.splice(source.index, 1);
    }
    if (source.droppableId === "rejectedId") {
      addon = rejectedlist[source.index];
      rejectedlist.splice(source.index, 1);
    } else {
      return;
    }

    if (destination.droppableId === "interestedId") {
      interestedList.splice(destination.index, 0, addon);
    }
    if (destination.droppableId === "shortlistedId") {
      shortlist.splice(destination.index, 0, addon);
    }
    if (destination.droppableId === "rejectedId") {
      rejectedlist.splice(destination.index, 0, addon);
    } else {
      return;
    }

    let shorted;
    if (source.droppableId === "shortlistedId") {
      shorted = shortlist[source.index];
      shortlist.splice(source.index, 1);
    }
    if (source.droppableId === "rejectedId") {
      shorted = rejectedlist[source.index];
      rejectedlist.splice(source.index, 1);
    } else {
      return;
    }

    if (destination.droppableId === "shortlistedId") {
      shortlist.splice(destination.index, 0, shorted);
    }
    if (destination.droppableId === "rejectedId") {
      rejectedlist.splice(destination.index, 0, shorted);
    } else {
      return;
    }

    setList(list);
    setInterestedList(interestedList);
    setShortlist(shortlist);
    setRejectedlist(rejectedlist);
    console.log(result);
  };
  return (
    <div className="candidate-bg">
      <div className="heading-bg">
        <p className="heading-txt">My Candidates</p>
        <select className="dropdown">
          <option>UI UX Designer</option>
          <option>Store Manager</option>
          <option>Project Manager</option>
          <option>Marketing</option>
        </select>
      </div>
      <div className="candidate-body">
        <DragDropContext onDragEnd={onEnd}>
          <div className="body-bg">
            <div className="head-body">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="head-txt">Applied</p>
                <div style={{ display: "flex" }}>
                  <p className="num">25</p>
                  <FaLongArrowAltUp
                    size={14}
                    color="#16a87c"
                    className="arrow-icon"
                  />
                  <p className="percent">10%</p>
                </div>
              </div>
              <div style={{ height: "50px", width: "50px" }}>
                <CircularProgressbar
                  value={72}
                  text={`${72}%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "#1872d4",
                  })}
                />
              </div>
            </div>
            <div className="candidates-bg">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Droppable droppableId="appliedId">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {list.map(
                        ({ id, name, designation, profileimg }, index) => {
                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="candidate-container">
                                    <img
                                      src={profileimg}
                                      alt={`${name}img`}
                                      className="pro-pic"
                                    />
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "5px",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      <p className="name">{name}</p>
                                      <p className="position">{designation}</p>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        marginLeft: "40px",
                                      }}
                                    >
                                      <FcTodoList className="icons" size={15} />
                                      <BiMessageRoundedDetail
                                        className="icons"
                                        size={15}
                                      />
                                      <BsThreeDotsVertical
                                        className="icons"
                                        size={15}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
            <input
              type="text"
              placeholder="Enter text here..."
              className="input-box"
            />
          </div>
          <div className="body-bg">
            <div className="head-body">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="head-txt">Interested</p>
                <div style={{ display: "flex" }}>
                  <p className="num">17</p>
                  <FaLongArrowAltUp
                    size={14}
                    color="#16a87c"
                    className="arrow-icon"
                  />
                  <p className="percent">6%</p>
                </div>
              </div>
              <div style={{ height: "50px", width: "50px" }}>
                <CircularProgressbar
                  value={87}
                  text={`${87}%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "#027a6c",
                  })}
                />
              </div>
            </div>
            <div className="candidates-bg">
              <div className="scroll-bg">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Droppable droppableId="interestedId">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {interestedList.map(
                          ({ id, name, designation, profileimg }, index) => {
                            return (
                              <Draggable
                                key={id}
                                draggableId={id}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <div className="candidate-container">
                                      <img
                                        src={profileimg}
                                        alt={`${name}img`}
                                        className="pro-pic"
                                      />
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          marginTop: "5px",
                                          marginBottom: "5px",
                                        }}
                                      >
                                        <p className="name">{name}</p>
                                        <p className="position">
                                          {designation}
                                        </p>
                                      </div>
                                      <div
                                        style={{
                                          display: "flex",
                                          marginLeft: "40px",
                                        }}
                                      >
                                        <FcTodoList
                                          className="icons"
                                          size={15}
                                        />
                                        <BiMessageRoundedDetail
                                          className="icons"
                                          size={15}
                                        />
                                        <BsThreeDotsVertical
                                          className="icons"
                                          size={15}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            );
                          }
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
                {/* <div className="candidate-container">
                <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="pro-pic" className="pro-pic"  />
                    <div style={{display:"flex",flexDirection:"column",marginTop:"5px",marginBottom:"5px",}}>
                    <p className="name">Simon Torres</p>
                    <p className="position" >Google LLC.</p>
                    </div>
                    <div style={{display:"flex",marginLeft:"40px"}}>
                    <FcTodoList className="icons" size={15} />
                    <BiMessageRoundedDetail className="icons" size={15}/>
                    <BsThreeDotsVertical className="icons" size={15}/>
                    </div>
                </div> */}
              </div>
              <input
                type="text"
                placeholder="Enter text here..."
                className="input-box"
              />
            </div>
          </div>
          <div className="body-bg">
            <div className="head-body">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="head-txt">Shortlisted</p>
                <div style={{ display: "flex" }}>
                  <p className="num">21</p>
                  <FaLongArrowAltUp
                    size={14}
                    color="#16a87c"
                    className="arrow-icon"
                  />
                  <p className="percent">8%</p>
                </div>
              </div>
              <div style={{ height: "50px", width: "50px" }}>
                <CircularProgressbar
                  value={59}
                  text={`${59}%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "#3fe3cd",
                  })}
                />
              </div>
            </div>
            <Droppable droppableId="shortlistedId">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {shortlist.map(
                    ({ id, name, designation, profileimg }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="candidate-container">
                                <img
                                  src={profileimg}
                                  alt={`${name}img`}
                                  className="pro-pic"
                                />
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <p className="name">{name}</p>
                                  <p className="position">{designation}</p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    marginLeft: "40px",
                                  }}
                                >
                                  <FcTodoList className="icons" size={15} />
                                  <BiMessageRoundedDetail
                                    className="icons"
                                    size={15}
                                  />
                                  <BsThreeDotsVertical
                                    className="icons"
                                    size={15}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      );
                    }
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <input
              type="text"
              id="shortlist"
              placeholder="Drag & Drop"
              className="input-box-dotted"
            />
          </div>
          <div className="body-bg">
            <div className="head-body">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="head-txt">Rejected</p>
                <div style={{ display: "flex" }}>
                  <p className="num">12</p>
                  <FaLongArrowAltUp
                    size={14}
                    color="#16a87c"
                    className="arrow-icon"
                  />
                  <p className="percent">2%</p>
                </div>
              </div>
              <div style={{ height: "50px", width: "50px" }}>
                <CircularProgressbar
                  value={25}
                  text={`${25}%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "#e23b3b",
                  })}
                />
              </div>
            </div>
            <Droppable droppableId="rejectedId">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {rejectedlist.map(
                    ({ id, name, designation, profileimg }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="candidate-container">
                                <img
                                  src={profileimg}
                                  alt={`${name}img`}
                                  className="pro-pic"
                                />
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <p className="name">{name}</p>
                                  <p className="position">{designation}</p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    marginLeft: "40px",
                                  }}
                                >
                                  <FcTodoList className="icons" size={15} />
                                  <BiMessageRoundedDetail
                                    className="icons"
                                    size={15}
                                  />
                                  <BsThreeDotsVertical
                                    className="icons"
                                    size={15}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      );
                    }
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default MyCandidates;
