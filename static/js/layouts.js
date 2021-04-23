var layout_map = {
    "layout_0": layout_0,
    "layout_1": layout_1,
    "layout_2": layout_2,
    "layout_3": layout_3,
    "layout_4": layout_4,
    "layout_5": layout_5,
    "layout_6": layout_6,
    "layout_7": layout_7,
    "layout_8": layout_8,
    "layout_9": layout_9,
    "layout_10": layout_10,
    "layout_11": layout_11,
    "layout_12": layout_12,
    "layout_13": layout_13,
    "layout_14": layout_14,
    "layout_15": layout_15,
    "layout_16": layout_16,
    "layout_17": layout_17,
    "layout_18": layout_18,
    "layout_19": layout_19,
    "layout_20": layout_20,
    "layout_21": layout_21,
    "layout_22": layout_22,
    "layout_23": layout_23,
    "layout_24": layout_24,
    "layout_25": layout_25,
    "layout_26": layout_26,
    "layout_27": layout_27,
    "layout_28": layout_28,
}

function layout_0(links){ 
return `
<div class="feed-image p-2 px-3 layout-0">
<a class="single-image" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_1(links){ 
return `
<div class="bg-white border mt-2">
    <div class="feed-image p-2 px-3 layout-1">
        <a class="double-square-h" href="${links[0]}"
            style="background-image: url('${links[0]}');">
            <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
        </a>
        <a class="square" href="${links[1]}"
            style="background-image: url('${links[1]}');">
            <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
        </a>
        <a class="square" href="${links[2]}"
            style="background-image: url('${links[2]}');">
            <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
        </a>
    </div>
</div>
`}

function layout_2 (links){ 
return `
<div class="feed-image p-2 px-3 layout-2">
<a class="double-square-h" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-h" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_3 (links){ 
return `
<div class="feed-image p-2 px-3 layout-3">
<a class="double-square-v" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-v" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_4 (links){ 
return `
<div class="feed-image p-2 px-3 layout-4">
<a class="rectangle-h-8" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_5 (links){ 
return `
<div class="feed-image p-2 px-3 layout-5">
<a class="rectangle-h-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_6 (links){ 
return `
<div class="feed-image p-2 px-3 layout-6">
<a class="rectangle-v-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_7 (links){ 
return `
<div class="feed-image p-2 px-3 layout-7">
<a class="rectangle-v-8" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_8 (links){ 
return `
<div class="feed-image p-2 px-3 layout-8">
<a class="double-square-v" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_9 (links){ 
return `
<div class="feed-image p-2 px-3 layout-9">
<a class="square" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-v" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_10 (links){ 
return `
<div class="feed-image p-2 px-3 layout-10">
<a class="square" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-h" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_11 (links){ 
return `
<div class="feed-image p-2 px-3 layout-11">
<a class="rectangle-v-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8-8" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8-8" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_12 (links){ 
return `
<div class="feed-image p-2 px-3 layout-12">
<a class="rectangle-h-8-8" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8-8" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_13 (links){ 
return `
<div class="feed-image p-2 px-3 layout-13">
<a class="rectangle-h-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8-6" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8-6" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_14 (links){ 
return `
<div class="feed-image p-2 px-3 layout-14">
<a class="rectangle-v-8-6" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8-6" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_15 (links){ 
return `
<div class="feed-image p-2 px-3 layout-15">
<a class="rectangle-h-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_16 (links){ 
return `
<div class="feed-image p-2 px-3 layout-16">
<a class="rectangle-v-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_17 (links){ 
return `
<div class="feed-image p-2 px-3 layout-17">
<a class="square" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_18 (links){ 
return `
<div class="feed-image p-2 px-3 layout-18">
<a class="double-square-v" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_19 (links){ 
return `
<div class="feed-image p-2 px-3 layout-19">
<a class="rectangle-h-6-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-v" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}


function layout_20 (links){ 
return `
<div class="feed-image p-2 px-3 layout-20">
<a class="rectangle-v-6-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-h" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_21 (links){ 
return `
<div class="feed-image p-2 px-3 layout-21">
<a class="double-square-h" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_22 (links){ 
return `
<div class="feed-image p-2 px-3 layout-22">
<a class="rectangle-v-8" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_23 (links){ 
return `
<div class="feed-image p-2 px-3 layout-23">
<a class="square square-v-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_24 (links){ 
return `
<div class="feed-image p-2 px-3 layout-24">
<a class="square square-v-4" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_25 (links){ 
return `
<div class="feed-image p-2 px-3 layout-25">
<a class="rectangle-h-8" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_26 (links){ 
return `
<div class="feed-image p-2 px-3 layout-26">
<a class="rectangle-v-3" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-3" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-3" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-3" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_27 (links){ 
return `
<div class="feed-image p-2 px-3 layout-27">
<a class="square" href="${links[0]}"
    style="background-image: url('${links[0]}');">
    <img src="${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${links[1]}"
    style="background-image: url('${links[1]}');">
    <img src="${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[2]}"
    style="background-image: url('${links[2]}');">
    <img src="${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[3]}"
    style="background-image: url('${links[3]}');">
    <img src="${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-v-4" href="${links[4]}"
    style="background-image: url('${links[4]}');">
    <img src="${links[4]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_28 (links){ 
return `

`}
