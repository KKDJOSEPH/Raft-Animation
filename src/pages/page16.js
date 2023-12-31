import '../css/page16.css';
import React from 'react'
import anime from "animejs";

function Page16(props){
  let obj3 = document.querySelector('#Page16Node2');
  if(obj3 !== null) obj3.style.borderStyle = 'dotted';
  let obj4 = document.querySelector('#VoteCount');
  if(obj4 !== null) obj4.innerHTML = " Vote Count: 0/2";

  function animation() {
    let animation1 = anime.timeline().add({
      targets: '#Page16Signal1',
      opacity: 1,
      translateX: [28, -73],
      translateY: [-72, 129],
      easing: "linear",
      duration: 2000,
      complete: function () {
        anime({
          targets: '#Page16Signal1',
          opacity: 1,
          translateX: [-73, 28],
          translateY: [129, -72],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animation2 = anime.timeline().add({
      targets: '#Page16Signal2',
      opacity: 1,
      translateX: [127, -73],
      translateY: [129, 129],
      easing: "linear",
      duration: 2000,
      complete: function() {
        let obj2 = document.querySelector('#Page16Node2');
        obj2.style.borderStyle = 'solid';
        let obj3 = document.querySelector('#VoteCount');
        obj3.innerHTML = "Vote Count: 2/2";
        anime({
          targets: '#Page16Signal2',
          opacity: 1,
          translateX: [-73, 127],
          translateY: [129, 129],
          easing: "linear",
          duration: 0,
        });
      }
    });

    let animetion3 = anime.timeline().add({
      targets: '#Page16Text1',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 2000,
    }).add({
      targets: '#Page16Text2',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    }).add({
      targets: '#Page16Text2',
      scaleX: [1,0],
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 400,
      delay: 3000,
    }).add({
      targets: '#Page16Text3',
      scaleX: [0,1],
      opacity: [0,1],
      easing: "easeInExpo",
      duration: 400,
    });
  }

  if(props.display) animation();

  return(
      <div style={{display: props.display?'': 'none'}}>
        <div className="Page16NodeDes" id="Page16NodeDes1">
          <div className="NodeDesContent"> Node b</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page16Node" id="Page16Node1"/>
        <div className="Page16NodeDes" id="Page16NodeDes2">
          <div className="NodeDesContent"> Node a</div>
          <div className="NodeDesContent"> Term: 0</div>
          <div className="NodeDesContent" id="VoteCount"> Vote Count: 0/2</div>
        </div>
        <div className="Page16Node" id="Page16Node2"/>
        <div className="Page16NodeDes" id="Page16NodeDes3">
          <div className="NodeDesContent"> Node c</div>
          <div className="NodeDesContent"> Term: 0</div>
        </div>
        <div className="Page16Node" id="Page16Node3"/>
        <div className="Page16Signal" id="Page16Signal1"/>
        <div className="Page16Signal" id="Page16Signal2"/>
        <div className="Page16Text" id="Page16Text1"> Nodes will reply with their vote. </div>
        <div className="Page16Text" id="Page16Text2"> The candidate becomes the leader if it gets votes from a majority of nodes. </div>
        <div className="Page16Text" id="Page16Text3"> This process is called <span id="Focus">Leader Election</span>. </div>
      </div>
  );
}

export default Page16;