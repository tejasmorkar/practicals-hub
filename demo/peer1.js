const localConnection = new RTCPeerConnection()
 

localConnection.onicecandidate = e =>  {
    console.log(" NEW ice candidnat!! on localconnection reprinting SDP ")
}

/*$("#create-offer").click(()=>{
    prompt("Ctrl + click to copy ", JSON.stringify(localConnection.localDescription))
})*/

function fun(){
    swal({
        title:"Offer Created",
        text: JSON.stringify(localConnection.localDescription,undefined,2),
        icon: "success",
    })
}

const sendChannel = localConnection.createDataChannel("sendChannel");
 sendChannel.onmessage =e =>  $('#data_send').val(e.data)
   sendChannel.onopen = e => $('#status').text('Open')
     sendChannel.onclose =e => $('#status').text('Close')

localConnection.createOffer().then(o => localConnection.setLocalDescription(o))

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