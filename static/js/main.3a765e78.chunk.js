(this.webpackJsonpmediapipe_facemesh=this.webpackJsonpmediapipe_facemesh||[]).push([[0],{25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);n(25);var c,a,r=n(0),i=n.n(r),o=n(8),s=n.n(o),d=n(15),l=n(9),E=n.n(l),u=n(11),h=n(16),f=n(23),b=n.n(f),m=n(17),C=n(24),F=n(3),j=n(2),g=n(4),v=function(e,t){var n=e.canvas.width*t.x,c=e.canvas.height*t.y;e.fillStyle="#22a7f2",e.beginPath(),e.arc(n,c,5,0,2*Math.PI,!0),e.fill()},O=n(6),_=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useRef)(),c=Object(h.b)({bgImage:!1,landmark:{min:0,max:477,step:1,value:0},result:Object(h.a)((function(){a()}))}),a=function(){var e=n.current;console.log(e.multiFaceLandmarks[0]),console.log("FACEMESH_LEFT_EYE",F.FACEMESH_LEFT_EYE),console.log("FACEMESH_RIGHT_EYE",F.FACEMESH_RIGHT_EYE),console.log("FACEMESH_LIPS",F.FACEMESH_LIPS)},i=Object(r.useCallback)((function(e){n.current=e,function(e,t,n,c){var a=e.canvas.width,r=e.canvas.height;if(e.save(),e.clearRect(0,0,a,r),n&&e.drawImage(t.image,0,0,a,r),t.multiFaceLandmarks){var i,o={color:"#C0C0C070",lineWidth:1},s={color:"#FF3030",lineWidth:1},d={color:"#30FF30",lineWidth:1},l={color:"#E0E0E0",lineWidth:1},E=Object(j.a)(t.multiFaceLandmarks);try{for(E.s();!(i=E.n()).done;){var u=i.value;Object(g.drawConnectors)(e,u,F.FACEMESH_TESSELATION,o),Object(g.drawConnectors)(e,u,F.FACEMESH_RIGHT_EYE,s),Object(g.drawConnectors)(e,u,F.FACEMESH_RIGHT_EYEBROW,s),Object(g.drawConnectors)(e,u,F.FACEMESH_RIGHT_IRIS,s),Object(g.drawConnectors)(e,u,F.FACEMESH_LEFT_EYE,d),Object(g.drawConnectors)(e,u,F.FACEMESH_LEFT_EYEBROW,d),Object(g.drawConnectors)(e,u,F.FACEMESH_LEFT_IRIS,d),Object(g.drawConnectors)(e,u,F.FACEMESH_FACE_OVAL,l),Object(g.drawConnectors)(e,u,F.FACEMESH_LIPS,l),v(e,u[c])}}catch(h){E.e(h)}finally{E.f()}}e.restore()}(t.current.getContext("2d"),e,c.bgImage,c.landmark)}),[c]);return Object(r.useEffect)((function(){var t=new F.FaceMesh({locateFile:function(e){return"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/".concat(e)}});if(t.setOptions({maxNumFaces:1,refineLandmarks:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),t.onResults(i),e.current){var n=new C.Camera(e.current.video,{onFrame:function(){var n=Object(u.a)(E.a.mark((function n(){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.send({image:e.current.video});case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),width:1280,height:720});n.start()}return function(){t.close()}}),[i]),Object(O.jsxs)("div",{className:p.container,children:[Object(O.jsx)(b.a,{ref:e,style:{visibility:"hidden"},audio:!1,width:1280,height:720,mirrored:!0,screenshotFormat:"image/jpeg",videoConstraints:{width:1280,height:720,facingMode:"user"}}),Object(O.jsx)("canvas",{ref:t,className:p.canvas,width:1280,height:720})]})},p={container:Object(m.a)(c||(c=Object(d.a)(["\n\t\tposition: relative;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\toverflow: hidden;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t"]))),canvas:Object(m.a)(a||(a=Object(d.a)(["\n\t\tposition: absolute;\n\t\twidth: 1280px;\n\t\theight: 720px;\n\t\tbackground-color: #1e1e1e;\n\t\tborder: 1px solid #fff;\n\t"])))},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.3a765e78.chunk.js.map