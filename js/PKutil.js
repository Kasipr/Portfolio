function validatePostNewsForm(){
    let form = $("#postNewsForm");
    form.validate({
        rules:{
            postNewsUsername: {
                required: true,
                rangelength: [2, 20]
            },
            postNewsTitle: {
                required: true,
                rangelength: [2, 40]
            },
            postNewsCategory: {
                required: true,
            },
            postNewsLink: {

            },
            postNewsComments: {
              required: true,
              rangelength: [2,500]
            },

        },

        messages:{
            postNewsUsername:{
                required: "You must enter your username",
                minlength: "Your username must be between 2-20 characters.",
            },
            postNewsTitle:{
                required: "You must enter a title",
                rangelength: "Your title must be between 2-40 characters."
            },
            postNewsCategory:{
                required: "You must choose a category."
            },
            postNewsLink:{
            },
            postNewsComments: {
                required: "Your comment must be between 2-500 characters.",
            },

        }
    });
    return form.valid();
}

function validatePostEventsForm(){
    let form = $("#postEventsForm");
    form.validate({
        rules:{
            postEventsUsername: {
                required: true,
                rangelength: [2, 20]
            },
            postEventsTitle: {
                required: true,
                rangelength: [2, 40]
            },
            postEventsDate: {
                required: true,
            },
            postEventsMandatory: {

            },
            postEventsInfo: {
                required: true,
                rangelength: [2,500]
            },

        },

        messages:{
            postEventsUsername:{
                required: "You must enter your username",
                minlength: "Your username must be between 2-20 characters.",
            },
            postEventsTitle:{
                required: "You must enter a title",
                rangelength: "Your title must be between 2-40 characters."
            },
            postEventsDate:{
                required: "You must choose a date."
            },
            postEventsMandatory:{
            },
            postEventsInfo: {
                required: "Your comment must be between 2-500 characters.",
            },

        }
    });
    return form.valid();
}

function validatePostReviewForm(){
    let form = $("#postReviewForm");
    form.validate({
        rules:{
            postReviewUsername: {
                required: true,
                rangelength: [2, 20]
            },
            postReviewTitle: {
                required: true,
                rangelength: [2, 40]
            },
            postReviewComments: {
                required: true,
                rangelength: [2, 500],
            },
            rateUI: {
                required: true,
                value: [1-5],
            },
            rateTaste: {
                required: true,
                value: [1-5],
            },

        },

        messages:{
            postReviewUsername:{
                required: "You must enter your username",
                minlength: "Your username must be between 2-20 characters.",
            },
            postReviewTitle:{
                required: "You must enter a title",
                rangelength: "Your title must be between 2-40 characters."
            },
            postReviewComments:{
                required: "Enter comments in your review",
                rangelength: "Your comments must be between 2-500 characters"
            },
            rateQuality:{
                required: "You must enter a rating",
                value: "Rating must be between 0-5"
            },
            rateTaste: {
                required: "You must enter a rating",
                value: "Rating must be between 0-5"
            },

        }
    });
    return form.valid();
}

function doMath() {
    var numOne = document.getElementById('rateQuality').value;
    var numTwo = document.getElementById('rateTaste').value;
    //var total =  (parseInt(numOne) + parseInt(numTwo))* 100 / 10;
    var output = document.getElementById("output").value = (parseInt(numOne) + parseInt(numTwo))* 100 / 10;
}