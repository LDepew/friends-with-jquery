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
        display();
    });
});

const display = () => {
    let tbody = $("tbody");
    tbody.clear()
    for(let friend of friends) {
        let tr = $("<tr></tr>")
    }
}