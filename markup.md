<!-- // https://codepen.io/artyom-ivanov/pen/MoxENg -->
<!--
Credit to Artyom on CP -->

<!-------------------------------- HTML -->

<div class="back"></div>
<div class="content">
  <div class="fire">
  <div class="bottom"></div>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
  <figure></figure>
    </div>
  <div class="reverse">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
  	</filter>
  </defs>
</svg>

<!--
csss -->

@import url('https://fonts.googleapis.com/css?family=Cinzel|Open+Sans+Condensed:300i');
.back {
// background: linear-gradient(to top, #141e30, #243b55);
background: #fdf3e9;
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
}

.content {
position: absolute;
left: 50%;
bottom: 0;
margin: 0 0 -30px -100px;
width: 200px;
height: 200px;
overflow: hidden;
border-radius: 100%;
.fire{  
 filter: url(#goo);
position: absolute;
width: 100%;
height: 100%;
}
div.bottom {
position: absolute;
left: 50px;
bottom: 0;
width: 100px;
height: 30px;
background: #ff9800;
border-radius: 30px;
}
figure {
position: absolute;
margin: 0 0 -15px;
left: calc(50% - 70px);
bottom: 0;
width: 70px;
height: 70px;
background: #ff9800;
border-radius: 100%;
@for $i from 1 through 16 {
      &:nth-child(#{$i}) {
animation: firecircle
1.2s
#{$i*0.14}s
          cubic-bezier(0.5, 0.07, 0.64, 1)
          infinite;
        margin-left: random(70)+px;
        margin-bottom: -#{15+random(25)}px;
      }
    }
  }
  .reverse div {
    position: absolute;
    margin: 0 0 -15px;
    left: 0;
    bottom: 0;
    width: 70px;
    height: 70px;
    background: #ffd590;
    border-radius: 100%;
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
animation: firereverseleft
1.2s
#{$i*0.5}s
          cubic-bezier(0.5, 0.07, 0.64, 1)
          infinite;
        margin-left: random(23)+px;
        margin-bottom: -#{15+random(25)}px;
      }
    }
    @for $i from 1 through 4 {
      &:nth-child(#{$i+4}) {
left:120px;
animation: firereverseright
1.2s
#{$i\*0.5}s
cubic-bezier(0.5, 0.07, 0.64, 1)
infinite;
margin-left: random(23)+px;
margin-bottom: -#{15+random(25)}px;
}
}
}
}
@keyframes firecircle {
0% {
transform: translateY(0) scale(1);
background: #ff9800;
}
100% {
transform: translateY(-175px) scale(0);
background: #ffc107;
}
}

p {
color: white;
position: absolute;
left: 50%;
top: 40%;
transform: translate(-50%, -50%);
text-align: center;
font-size: 42px;
font-family: 'Cinzel', serif;
span {
width: 100%;
font-size: 22px;
font-style: italic;
float: left;
margin: 30px 0 0;
letter-spacing: 1px;
color: #ffc107;
font-family: 'Open Sans Condensed', sans-serif;
&:before {
content: '— ';
}
}
}
