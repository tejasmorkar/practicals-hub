const localConnection = new RTCPeerConnection()
 

localConnection.onicecandidate = e =>  {
    console.log(" NEW ice candidnat!! on localconnection reprinting SDP ")
    $('#offer').text(JSON.stringify(localConnection.localDescription))
}


const sendChannel = localConnection.createDataChannel("sendChannel");
 sendChannel.onmessage =e =>  $('#data_send').val(e.data)
   sendChannel.onopen = e => $('#status').text('Open')
     sendChannel.onclose =e => $('#status').text('Close')

function myFunction() {
        document.getElementById("offer").innerHTML = localConnection.createOffer().then(o => localConnection.setLocalDescription(o)) ;
      }

$('#offer').click(()=>{
    fetch(localConnection.createOffer().then(o => localConnection.setLocalDescription(o)))
    .then(response=>response.json())
    .then(data=>{
        console.log()
    })
    //var msg;
    //msg=localConnection.createOffer().then(o => localConnection.setLocalDescription(o));
    //alert(msg);
})

//localConnection.createOffer().then(o => localConnection.setLocalDescription(o))

/*$('button.msg').on('click', function(e) {
    var msg=JSON.stringify(localConnection.createOffer().then(o => localConnection.setLocalDescription(o)));
    
    alert(offer+"\n"+msg)
  });*/



$('#connect').click(() => {
    let answer = $('#answer').val()
    answer = JSON.parse(answer)
    localConnection.setRemoteDescription (answer).then(a=>console.log("done"))
})

$('#send').click(() => {
    let data = $('#data_send').val()
    sendChannel.send(data)
})

$('#data_send').bind('input propertychange', () => {
    let data = $('#data_send').val()
    sendChannel.send(data)
})