if ($('#dropzone').length) {
    $("form#dropzone").dropzone({
        url: "/file/post",
        addRemoveLinks: true,
        accept: function (file, done) {
            console.log("uploaded");
            done();
            //used for enabling the submit button if file exist 
            $("#submitbtn").prop("disabled", false);
        }
    });
    // other code here
}


// function upload(file) {
//     console.log(file)
//     var form = new FormData();
//     form.append("file", file, file.name);

//     var settings = {
//         "url": "https://staging-upload.gapo.vn/media/v1.0/internal-files",
//         "method": "POST",
//         "timeout": 0,
//         "headers": {
//             "x-gapo-role": "service"
//         },
//         "processData": false,
//         "mimeType": "multipart/form-data",
//         "contentType": false,
//         "data": form
//     };

//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// }
$(document).ready(function () {
    console.log("script", results)
    layout_icons = [
        {
            img: "static/image/1.png",
            id: 1,
        },
        {
            img: "static/image/2.png",
            id: 2,
        },
        {
            img: "static/image/3.png",
            id: 3,
        },
        {
            img: "static/image/4.png",
            id: 4,
        },
        {
            img: "static/image/5.png",
            id: 5,
        },
        {
            img: "static/image/6.png",
            id: 6,
        },
        {
            img: "static/image/7.png",
            id: 7,
        },
        {
            img: "static/image/8.png",
            id: 8,
        },
        {
            img: "static/image/9.png",
            id: 9,
        },
        {
            img: "static/image/10.png",
            id: 10,
        },
        {
            img: "static/image/11.png",
            id: 11,
        },
        {
            img: "static/image/12.png",
            id: 12,
        },
        {
            img: "static/image/13.png",
            id: 13,
        },
        {
            img: "static/image/14.png",
            id: 14,
        },
        {
            img: "static/image/15.png",
            id: 15,
        },
        {
            img: "static/image/16.png",
            id: 16,
        },
        {
            img: "static/image/17.png",
            id: 17,
        },
        {
            img: "static/image/18.png",
            id: 18,
        },
        {
            img: "static/image/19.png",
            id: 19,
        },
        {
            img: "static/image/20.png",
            id: 20,
        },
        {
            img: "static/image/21.png",
            id: 21,
        },
        {
            img: "static/image/22.png",
            id: 22,
        },
        {
            img: "static/image/23.png",
            id: 23,
        },
        {
            img: "static/image/24.png",
            id: 24,
        },
        {
            img: "static/image/25.png",
            id: 25,
        },
        {
            img: "static/image/26.png",
            id: 26,
        },
        {
            img: "static/image/27.png",
            id: 27,
        },
    ]
    // links = [
    //     "static/image/aoKusnD.jpg",
    //     "static/image/aoKusnD.jpg",
    //     "static/image/aoKusnD.jpg",
    //     "static/image/aoKusnD.jpg",
    // ]

    // results = load_result()

    for (var i= 0; i < layout_icons.length; i++){
        $(".layout-wrapper").append(`<div class="layout-icon" style="background-image: url('${layout_icons[i].img}');" data-value="${layout_icons[i].id}"></div>`)
    }

    $(`.layout-icon[data-value='${results.layout_id}']`).addClass("icon-active")
    set_layout(results.layout_id, results)
    $(".layout-icon").click(function () {
        $(".layout-icon").removeClass("icon-active")
        $(this).addClass("icon-active")
        set_layout($(this).attr("data-value"), results)
    });

    $(".layout-icon").click(function () {
        $(".layout-icon").removeClass("icon-active")
        $(this).addClass("icon-active")
        set_layout($(this).attr("data-value"), links)
    });
})

function get_layout(layout, links, total_img) {
    console.log("layout", layout)
    return layout_map[layout].layout(links, total_img, layout_map[layout].size_set)
}

function set_layout(layout_id, results){
    layout_id = `layout_${layout_id}`
    $("#preview-layout").html(get_layout(layout_id, results.list_image_upload, results.total));
    $("#preview-layout-2").html(get_layout(layout_id, results.list_image_process, results.total));
    return
}


 function load_result(){
    result = {
        "list_image_upload": [
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg",
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg",
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg",
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg",
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg"
        ],
        "list_image_process": [
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg",
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg",
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg",
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg",
          "http://172.16.6.242:9092/mnt/DATACV/famous_people_vn/chipu1.jpg"
        ],
        "layout_id": 3, 
        "total": 10
      }
    return result
 }
