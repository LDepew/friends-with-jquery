let friends = [];

$().ready(() => {
    $("#add").click(() => {
        let fname = $("#iname").val();
        let femail = $("#iemail").val();
        let fphone = $("#iphone").val();
        let friend = {
            name: fname, email: femail, phone: fphone
        };
        friends.push(friend);
    });
});

// const readyFN = () => {
//     console.group("jQuery is ready!");
// }

// $().ready(readyFN);

