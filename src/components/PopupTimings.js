import React from "react";
import { useState } from "react";
import { ForDevice } from "media-query-react";

export default function PopupTimings(props) {
  const [mondayST, setMondayST] = useState("");
  const [mondayET, setMondayET] = useState("");

  const [tuesdayST, setTuesdayST] = useState("");
  const [tuesdayET, setTuesdayET] = useState("");

  const [wednesdayST, setWednesdayST] = useState("");
  const [wednesdayET, setWednesdayET] = useState("");

  const [thursdayST, setThursdayST] = useState("");
  const [thursdayET, setThursdayET] = useState("");

  const [fridayST, setFridayST] = useState("");
  const [fridayET, setFridayET] = useState("");

  const [saturdayST, setSaturdayST] = useState("");
  const [saturdayET, setSaturdayET] = useState("");

  const [sundayST, setSundayST] = useState("");
  const [sundayET, setSundayET] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    var TimingList = [
      {
        Id: 0,
        DayId: 1,
        RestaurantId: 1,
        Day: "MONDAY",
        OpeningTime: mondayST,
        ClosingTime: mondayET,
        ResponseCode: 5,
        ResponseMessage: "sample string 6",
      },
      {
        Id: 0,
        DayId: 2,
        RestaurantId: 1,
        Day: "Tuesday",
        OpeningTime: tuesdayST,
        ClosingTime: tuesdayET,
        ResponseCode: 5,
        ResponseMessage: "sample string 6",
      },
      {
        Id: 0,
        DayId: 3,
        RestaurantId: 1,
        Day: "Wednesday",
        OpeningTime: wednesdayST,
        ClosingTime: wednesdayET,
        ResponseCode: 5,
        ResponseMessage: "sample string 6",
      },
      {
        Id: 0,
        DayId: 4,
        RestaurantId: 1,
        Day: "Thursday",
        OpeningTime: thursdayST,
        ClosingTime: thursdayET,
        ResponseCode: 5,
        ResponseMessage: "sample string 6",
      },
      {
        Id: 0,
        DayId: 5,
        RestaurantId: 1,
        Day: "Friday",
        OpeningTime: fridayST,
        ClosingTime: fridayET,
        ResponseCode: 5,
        ResponseMessage: "sample string 6",
      },
      {
        Id: 0,
        DayId: 6,
        RestaurantId: 1,
        Day: "Saturday",
        OpeningTime: saturdayST,
        ClosingTime: saturdayET,
        ResponseCode: 5,
        ResponseMessage: "sample string 6",
      },
      {
        Id: 0,
        DayId: 7,
        RestaurantId: 1,
        Day: "Sunday",
        OpeningTime: sundayST,
        ClosingTime: sundayET,
        ResponseCode: 5,
        ResponseMessage: "sample string 6",
      },
    ];

    
      TimingList.map((c)=> 
      
    fetch("https://api.masairapp.com/api/RestaurantWorkingDays/AddWorkingDays",{
      method:"POST",
      headers:{
          "Content-Type":"application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          
      },
      body:JSON.stringify(c)
   
  }).then((result)=>{
    
    return result.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error)=>{
      console.log(error)
  })
      )
    

  }

  return (
    <div>
      {/* --------DESKTOP TIMIMGS------- */}
      <ForDevice deviceName={["tablet", "desktop"]}>
        <div className="title-popup">
          <h6>Outlet Timings</h6>
        </div>
        <div className="border-popup-city">
          {/* --------Monday------- */}
          <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
            {/* Days */}
            <div className="width-24">
              <div class="border-days">
                <span>Monday</span>
              </div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={mondayST}
                onChange={(e) => setMondayST(e.target.value)}
              />
            </div>

            {/* Text "to" */}
            <div className="text-center align-self-center m-0">
              <div className="label-PS  m-0">to</div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={mondayET}
                onChange={(e) => setMondayET(e.target.value)}
              />
            </div>

            {/* Active / Inactive */}
            <div className="">
              <label className="switch-S">
                <input type="checkbox" />
                <span className="slider-S round-S"></span>
              </label>
            </div>
          </div>

          {/* --------Tuesday------- */}
          <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
            {/* Days */}
            <div className="width-24">
              <div class="border-days">
                <span>Tuesday</span>
              </div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={tuesdayST}
                onChange={(e) => setTuesdayST(e.target.value)}
              />
            </div>

            {/* Text "to" */}
            <div className="text-center align-self-center m-0">
              <div className="label-PS  m-0">to</div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={tuesdayET}
                onChange={(e) => setTuesdayET(e.target.value)}
              />
            </div>

            {/* Active / Inactive */}
            <div className="">
              <label className="switch-S">
                <input type="checkbox" />
                <span className="slider-S round-S"></span>
              </label>
            </div>
          </div>

          {/* --------Wednesday------- */}
          <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
            {/* Days */}
            <div className="width-24">
              <div class="border-days">
                <span>Wednesday</span>
              </div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={wednesdayST}
                onChange={(e) => setWednesdayST(e.target.value)}
              />
            </div>

            {/* Text "to" */}
            <div className="text-center align-self-center m-0">
              <div className="label-PS  m-0">to</div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={wednesdayET}
                onChange={(e) => setWednesdayET(e.target.value)}
              />
            </div>

            {/* Active / Inactive */}
            <div className="">
              <label className="switch-S">
                <input type="checkbox" />
                <span className="slider-S round-S"></span>
              </label>
            </div>
          </div>

          {/* --------Thursday------- */}
          <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
            {/* Days */}
            <div className="width-24">
              <div class="border-days">
                <span>Thursday</span>
              </div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={thursdayST}
                onChange={(e) => setThursdayST(e.target.value)}
              />
            </div>

            {/* Text "to" */}
            <div className="text-center align-self-center m-0">
              <div className="label-PS  m-0">to</div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={thursdayET}
                onChange={(e) => setThursdayET(e.target.value)}
              />
            </div>

            {/* Active / Inactive */}
            <div className="">
              <label className="switch-S">
                <input type="checkbox" />
                <span className="slider-S round-S"></span>
              </label>
            </div>
          </div>

          {/* --------Friday------- */}
          <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
            {/* Days */}
            <div className="width-24">
              <div class="border-days">
                <span>Friday</span>
              </div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={fridayST}
                onChange={(e) => setFridayST(e.target.value)}
              />
            </div>

            {/* Text "to" */}
            <div className="text-center align-self-center m-0">
              <div className="label-PS  m-0">to</div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={fridayET}
                onChange={(e) => setFridayET(e.target.value)}
              />
            </div>

            {/* Active / Inactive */}
            <div className="">
              <label className="switch-S">
                <input type="checkbox" />
                <span className="slider-S round-S"></span>
              </label>
            </div>
          </div>

          {/* --------Saturday------- */}
          <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
            {/* Days */}
            <div className="width-24">
              <div class="border-days">
                <span>Saturday</span>
              </div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={saturdayST}
                onChange={(e) => setSaturdayST(e.target.value)}
              />
            </div>

            {/* Text "to" */}
            <div className="text-center align-self-center m-0">
              <div className="label-PS  m-0">to</div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={saturdayET}
                onChange={(e) => setSaturdayET(e.target.value)}
              />
            </div>

            {/* Active / Inactive */}
            <div className="">
              <label className="switch-S">
                <input type="checkbox" />
                <span className="slider-S round-S"></span>
              </label>
            </div>
          </div>

          {/* --------Sunday------- */}
          <div className="Section-PS-Timings d-flex col-md-12 justify-content-between align-items-center">
            {/* Days */}
            <div className="width-24">
              <div class="border-days">
                <span>Sunday</span>
              </div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={sundayST}
                onChange={(e) => setSundayST(e.target.value)}
              />
            </div>

            {/* Text "to" */}
            <div className="text-center align-self-center m-0">
              <div className="label-PS  m-0">to</div>
            </div>

            {/* Time */}
            <div className="width-24">
              <input
                className="time-input"
                type="time"
                id="appt"
                name="appt"
                placeholder="12:00AM"
                value={sundayET}
                onChange={(e) => setSundayET(e.target.value)}
              />
            </div>

            {/* Active / Inactive */}
            <div className="">
              <label className="switch-S">
                <input type="checkbox" />
                <span className="slider-S round-S"></span>
              </label>
            </div>
          </div>
        </div>
      </ForDevice>

      {/* --------MOBILE TIMIMGS------- */}
      <ForDevice deviceName="mobile">
        <div className="title-popup">
          <h6>Outlet Timings</h6>
        </div>
        <div className="border-timings-M">
          {/* --------Monday------- */}
          <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
            <div className="align-days-act-inact">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Monday</span>
                </div>
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            <div className="align-timings">
              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={mondayST}
                  onChange={(e) => setMondayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={mondayET}
                  onChange={(e) => setMondayET(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* --------Tuesday------- */}
          <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
            <div className="align-days-act-inact">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Tuesday</span>
                </div>
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            <div className="align-timings">
              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={tuesdayST}
                  onChange={(e) => setTuesdayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={tuesdayET}
                  onChange={(e) => setTuesdayET(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* --------Wednesday------- */}
          <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
            <div className="align-days-act-inact">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Wednesday</span>
                </div>
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            <div className="align-timings">
              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={wednesdayST}
                  onChange={(e) => setWednesdayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={wednesdayET}
                  onChange={(e) => setWednesdayET(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* --------Thursday------- */}
          <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
            <div className="align-days-act-inact">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Thursday</span>
                </div>
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            <div className="align-timings">
              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={thursdayST}
                  onChange={(e) => setThursdayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={thursdayET}
                  onChange={(e) => setThursdayET(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* --------Friday------- */}
          <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
            <div className="align-days-act-inact">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Friday</span>
                </div>
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            <div className="align-timings">
              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={fridayST}
                  onChange={(e) => setFridayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={fridayET}
                  onChange={(e) => setFridayET(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* --------Saturday------- */}
          <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
            <div className="align-days-act-inact">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Saturday</span>
                </div>
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            <div className="align-timings">
              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={saturdayST}
                  onChange={(e) => setSaturdayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={saturdayET}
                  onChange={(e) => setSaturdayET(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* --------Sunday------- */}
          <div className="Section-PS-Timings  col-md-12 justify-content-between align-items-center">
            <div className="align-days-act-inact">
              {/* Days */}
              <div className="width-24">
                <div class="border-days">
                  <span>Sunday</span>
                </div>
              </div>

              {/* Active / Inactive */}
              <div className="">
                <label className="switch-S">
                  <input type="checkbox" />
                  <span className="slider-S round-S"></span>
                </label>
              </div>
            </div>

            <div className="align-timings">
              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={sundayST}
                  onChange={(e) => setSundayST(e.target.value)}
                />
              </div>

              {/* Text "to" */}
              <div className="text-center align-self-center m-0">
                <div className="label-PS  m-0">to</div>
              </div>

              {/* Time */}
              <div className="width-24">
                <input
                  className="time-input"
                  type="time"
                  id="appt"
                  name="appt"
                  placeholder="12:00AM"
                  value={sundayET}
                  onChange={(e) => setSundayET(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </ForDevice>

      {/* Buttons */}
      <div className="row m-auto">
        <div className="col-md-12 d-flex mb-2 pr-0 justify-content-center">
          <button
            type="submit"
            className="blue-btn"
            onClick={(e) => handleSubmit(e)}
            style={{ marginRight: "20px" }}
          >
            Save
          </button>
          <button className="green-btn" onClick={(e) => props.click(e)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
