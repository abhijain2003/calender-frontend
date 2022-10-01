import React, { useEffect, useState } from "react";
import "../Styles/Main.css";
import "../Styles/formik.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Main() {
  const start_array = [
    "09:30",
    "10:30",
    "11:30",
    "12:30",
    "13:30",
    "14:30",
    "15:30",
    "16:30",
    "17:30",
    "18:30",
    "19:30",
    "20:30",
    "21:30",
    "22:30",
    "23:30",
    "24:30",
    "01:30",
    "02:30",
    "03:30",
    "04:30",
    "05:30",
    "06:30",
    "07:30",
    "08:30"
  ];

  const end_array = [
    "10:30",
    "11:30",
    "12:30",
    "13:30",
    "14:30",
    "15:30",
    "16:30",
    "17:30",
    "18:30",
    "19:30",
    "20:30",
    "21:30",
    "22:30",
    "23:30",
    "24:30",
    "01:30",
    "02:30",
    "03:30",
    "04:30",
    "05:30",
    "06:30",
    "07:30",
    "08:30",
    "09:30"
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ];

  const [event, setevent] = useState(false);
  const [data, setdata] = useState(null);

  var date = new Date();
  var date2 = new Date();
  var date3 = new Date();
  var date4 = new Date();
  var date5 = new Date();
  var date6 = new Date();
  var date7 = new Date();
  var dateAfter2 = new Date(date2.setDate(date2.getDate() + 1));
  var dateAfter3 = new Date(date3.setDate(date3.getDate() + 2));
  var dateAfter4 = new Date(date4.setDate(date4.getDate() + 3));
  var dateAfter5 = new Date(date5.setDate(date5.getDate() + 4));
  var dateAfter6 = new Date(date6.setDate(date6.getDate() + 5));
  var dateAfter7 = new Date(date7.setDate(date7.getDate() + 6));

  function handleSee(data) {
    let start_point = start_array.filter((val, index) => {
      if (val <= data.start_time) {
        return start_array;
      }
    });
    start_point = start_point.sort((a, b) => (a > b ? 1 : -1));
    start_point = start_array.indexOf(start_point[start_point.length - 1]);

    let end_point = end_array.find((val, index) => {
      if (val >= data.end_time) {
        return val;
      }
    });
    end_point = end_array.indexOf(end_point);

    let box = document.getElementsByClassName(data.week);
    for (let index = start_point; index <= end_point; index++) {
      box[index].style.backgroundColor = "#EE6983";
      box[index].style.borderRadius = "0 12px 0 12px";
      box[index].style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
      box[index].innerHTML = data.title;

      const para = document.createElement("p");
      para.style.textTransform = "capitalize";
      index === end_point
        ? (para.innerText = data.start_time + " - " + data.end_time)
        : (para.innerText = data.start_time + " - " + end_array[index]);
      box[index].appendChild(para);

      box[index].style.display = "flex";
      box[index].style.flexDirection = "column";
      box[index].style.color = "white";
      box[index].style.justifyContent = "space-evenly";
    }
  }

  return (
    <div style={{ display: "grid" }}>
      <div
        style={{ gridArea: "1/1", opacity: event ? 0.5 : 1 }}
        className="main"
      >
        {/* timeline */}
        <div className="time-div">
          <div className="date-div">
            <p
              onClick={() => setevent((curr) => !curr)}
              className="today hover"
            >
              New Event
            </p>
          </div>
          <div className="current-week">
            <p>{date.getFullYear()}</p>
            <h2>
              {month[date.getMonth()] +
                " " +
                date.getDate() +
                " - " +
                month[dateAfter7.getMonth()] +
                " " +
                dateAfter7.getDate()}
            </h2>
          </div>
          <div className="week-list">
            {date.getDate() <= 7
              ? "1st Week"
              : date.getDate() > 7 && date.getDate() <= 14
              ? "2nd Week"
              : date.getDate() > 14 && date.getDate() <= 21
              ? "3nd Week"
              : date.getDate() > 21
              ? "4th Week"
              : ""}
          </div>
        </div>
        {/* grid */}
        <div className="grid">
          <div className="time">
            {start_array.map((val, index) => (
              <p key={index} className="time-row">
                {val + " - " + end_array[index]}
              </p>
            ))}
          </div>
          <div className="calender">
            <div className="days-div">
              <div className="hover">
                <p className="short-text">{days[date.getDay()]}</p>
                <h1 className="day">{date.getDate()}</h1>
              </div>
              <div className="hover">
                <p className="short-text">{days[dateAfter2.getDay()]}</p>
                <h1 className="day">{dateAfter2.getDate()}</h1>
              </div>
              <div className="hover">
                <p className="short-text">{days[dateAfter3.getDay()]}</p>
                <h1 className="day">{dateAfter3.getDate()}</h1>
              </div>
              <div className="hover">
                <p className="short-text">{days[dateAfter4.getDay()]}</p>
                <h1 className="day">{dateAfter4.getDate()}</h1>
              </div>
              <div className="hover">
                <p className="short-text">{days[dateAfter5.getDay()]}</p>
                <h1 className="day">{dateAfter5.getDate()}</h1>
              </div>
              <div className="hover">
                <p className="short-text">{days[dateAfter6.getDay()]}</p>
                <h1 className="day">{dateAfter6.getDate()}</h1>
              </div>
              <div className="hover">
                <p className="short-text">{days[dateAfter7.getDay()]}</p>
                <h1 className="day">{dateAfter7.getDate()}</h1>
              </div>
            </div>
            {start_array.map((val, index) => (
              <div key={index} id={index} className="calender-cols">
                <div className="calender-box 0"></div>
                <div className="calender-box 1"></div>
                <div className="calender-box 2"></div>
                <div className="calender-box 3"></div>
                <div className="calender-box 4"></div>
                <div className="calender-box 5"></div>
                <div className="calender-box 6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          top: event ? "60px" : "-450px",
          overflow: "hidden"
        }}
        className="event-box"
      >
        <Basic handleSee={handleSee} setdata={setdata} setevent={setevent} />
      </div>
    </div>
  );
}

const Basic = ({ handleSee, setevent, setdata }) => {
  const [week, setweek] = useState("");
  const [color, setcolor] = useState(false);

  useEffect(() => {}, [color]);

  return (
    <div className="basic">
      <p className="title">Make a new Event</p>
      <Formik
        initialValues={{ title: "", start_time: "", end_time: "", week: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          } else if (values.title.length < 4) {
            errors.title = "at least 1 word is required";
          } else if (
            values.end_time < values.start_time &&
            values.end_time !== ""
          ) {
            errors.start_time = "cannot set wrong time";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setevent(false);
            setdata(values);
            handleSee(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="form">
            <section className="title_div">
              <Field
                id="title"
                placeholder="Title"
                className="input__title"
                type="text"
                name="title"
              />
              <ErrorMessage
                className="title-error"
                name="title"
                component="div"
              />
            </section>
            <section className="start_end">
              <section className="start_div">
                <label htmlFor="start">Start Time</label>
                <Field type="time" id="start" name="start_time" />
              </section>
              <p>-</p>
              <section>
                <label htmlFor="end">End Time</label>
                <Field type="time" id="end" name="end_time" />
              </section>
            </section>
            <ErrorMessage name="start_time" component="div" />
            <div className="event_day">
              <p
                style={{ backgroundColor: week === 0 && color ? "navy" : "" }}
                onClick={() => {
                  setweek(0);
                  setcolor((curr) => !curr);
                  values.week = 0;
                }}
              >
                S
              </p>
              <p
                style={{ backgroundColor: week === 1 && color ? "navy" : "" }}
                onClick={() => {
                  setweek(1);
                  setcolor((curr) => !curr);
                  values.week = 1;
                }}
              >
                M
              </p>
              <p
                style={{ backgroundColor: week === 2 && color ? "navy" : "" }}
                onClick={() => {
                  setweek(2);
                  setcolor((curr) => !curr);
                  values.week = 2;
                }}
              >
                T
              </p>
              <p
                style={{ backgroundColor: week === 3 && color ? "navy" : "" }}
                onClick={() => {
                  setweek(3);
                  setcolor((curr) => !curr);
                  values.week = 3;
                }}
              >
                W
              </p>
              <p
                style={{ backgroundColor: week === 4 && color ? "navy" : "" }}
                onClick={() => {
                  setweek(4);
                  setcolor((curr) => !curr);
                  values.week = 4;
                }}
              >
                T
              </p>
              <p
                style={{ backgroundColor: week === 5 && color ? "navy" : "" }}
                onClick={() => {
                  setweek(5);
                  setcolor((curr) => !curr);
                  values.week = 5;
                }}
              >
                F
              </p>
              <p
                style={{ backgroundColor: week === 6 && color ? "navy" : "" }}
                onClick={() => {
                  setweek(6);
                  setcolor((curr) => !curr);
                  values.week = 6;
                }}
              >
                S
              </p>
            </div>
            <button className="btn" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Main;
