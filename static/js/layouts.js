var prefix_img = "http://172.16.6.230:8887/unsafe/"
var unit_size = 47
var unit_size_3 = 3 * 47
var unit_size_4 = 4 * 47
var unit_size_6 = 6 * 47
var unit_size_8 = 8 * 47
var unit_size_12 = 12 * 47
var layout_map = {
    "layout_0": { "layout": layout_0, "size_set": [`${unit_size_12}x${unit_size_12}`] },
    "layout_1": { "layout": layout_0, "size_set": [`${unit_size_12}x${unit_size_12}`] },//
    "layout_2": { "layout": layout_2, "size_set": [`${unit_size_12}x${unit_size_6}`, `${unit_size_12}x${unit_size_6}`] },//
    "layout_3": { "layout": layout_4, "size_set": [`${unit_size_12}x${unit_size_8}`, `${unit_size_12}x${unit_size_4}`] },//
    "layout_4": { "layout": layout_5, "size_set": [`${unit_size_12}x${unit_size_4}`, `${unit_size_12}x${unit_size_8}`] },//
    "layout_5": { "layout": layout_3, "size_set": [`${unit_size_6}x${unit_size_12}`, `${unit_size_6}x${unit_size_12}`] },//
    "layout_6": { "layout": layout_6, "size_set": [`${unit_size_4}x${unit_size_12}`, `${unit_size_8}x${unit_size_12}`] },//
    "layout_7": { "layout": layout_7, "size_set": [`${unit_size_8}x${unit_size_12}`, `${unit_size_4}x${unit_size_12}`] },//
    "layout_8": { "layout": layout_8, "size_set": [`${unit_size_6}x${unit_size_12}`, `${unit_size_6}x${unit_size_6}`, `${unit_size_6}x${unit_size_6}`] },//
    "layout_9": { "layout": layout_9, "size_set": [`${unit_size_6}x${unit_size_6}`, `${unit_size_6}x${unit_size_12}`, `${unit_size_6}x${unit_size_6}`] },//
    "layout_10": { "layout": layout_1, "size_set": [`${unit_size_12}x${unit_size_6}`, `${unit_size_6}x${unit_size_6}`, `${unit_size_6}x${unit_size_6}`] },//
    "layout_11": { "layout": layout_10, "size_set": [`${unit_size_6}x${unit_size_6}`, `${unit_size_6}x${unit_size_6}`, `${unit_size_12}x${unit_size_6}`] },//
    "layout_12": { "layout": layout_11, "size_set": [`${unit_size_4}x${unit_size_12}`, `${unit_size_8}x${unit_size_6}`, `${unit_size_8}x${unit_size_6}`] },//
    "layout_13": { "layout": layout_12, "size_set": [`${unit_size_8}x${unit_size_6}`, `${unit_size_4}x${unit_size_12}`, `${unit_size_8}x${unit_size_6}`] },//
    "layout_14": { "layout": layout_13, "size_set": [`${unit_size_12}x${unit_size_4}`, `${unit_size_6}x${unit_size_8}`, `${unit_size_6}x${unit_size_8}`] },//
    "layout_15": { "layout": layout_14, "size_set": [`${unit_size_6}x${unit_size_8}`, `${unit_size_6}x${unit_size_8}`, `${unit_size_12}x${unit_size_4}`] },//
    "layout_16": { "layout": layout_16, "size_set": [`${unit_size_4}x${unit_size_12}`, `${unit_size_4}x${unit_size_12}`, `${unit_size_4}x${unit_size_12}`] },//
    "layout_17": { "layout": layout_15, "size_set": [`${unit_size_12}x${unit_size_4}`, `${unit_size_12}x${unit_size_4}`, `${unit_size_12}x${unit_size_4}`] },//
    "layout_18": { "layout": layout_17, "size_set": [`${unit_size_6}x${unit_size_6}`, `${unit_size_6}x${unit_size_6}`, `${unit_size_6}x${unit_size_6}`, `${unit_size_6}x${unit_size_6}`] },//
    "layout_19": { "layout": layout_18, "size_set": [`${unit_size_6}x${unit_size_12}`, `${unit_size_6}x${unit_size_4}`, `${unit_size_6}x${unit_size_4}`, `${unit_size_6}x${unit_size_4}`] },//
    "layout_20": { "layout": layout_19, "size_set": [`${unit_size_6}x${unit_size_4}`, `${unit_size_6}x${unit_size_12}`, `${unit_size_6}x${unit_size_4}`, `${unit_size_6}x${unit_size_4}`] },//
    "layout_21": { "layout": layout_20, "size_set": [`${unit_size_4}x${unit_size_6}`, `${unit_size_4}x${unit_size_6}`, `${unit_size_4}x${unit_size_6}`, `${unit_size_12}x${unit_size_6}`] },//
    "layout_22": { "layout": layout_21, "size_set": [`${unit_size_12}x${unit_size_6}`, `${unit_size_4}x${unit_size_6}`, `${unit_size_4}x${unit_size_6}`, `${unit_size_4}x${unit_size_6}`] },//
    "layout_23": { "layout": layout_22, "size_set": [`${unit_size_8}x${unit_size_12}`, `${unit_size_4}x${unit_size_4}`, `${unit_size_4}x${unit_size_4}`, `${unit_size_4}x${unit_size_4}`] },//
    "layout_24": { "layout": layout_23, "size_set": [`${unit_size_4}x${unit_size_4}`, `${unit_size_8}x${unit_size_12}`, `${unit_size_4}x${unit_size_4}`, `${unit_size_4}x${unit_size_4}`] },//
    "layout_25": { "layout": layout_24, "size_set": [`${unit_size_4}x${unit_size_4}`, `${unit_size_4}x${unit_size_4}`, `${unit_size_4}x${unit_size_4}`, `${unit_size_8}x${unit_size_12}`] },//
    "layout_26": { "layout": layout_25, "size_set": [`${unit_size_8}x${unit_size_12}`, `${unit_size_4}x${unit_size_4}`, `${unit_size_4}x${unit_size_4}`, `${unit_size_4}x${unit_size_4}`] },//
    "layout_27": { "layout": layout_26, "size_set": [`${unit_size_3}x${unit_size_12}`, `${unit_size_3}x${unit_size_12}`, `${unit_size_3}x${unit_size_12}`, `${unit_size_3}x${unit_size_12}`] },//
    "layout_28": { "layout": layout_28, "size_set": ["555x555"] },
    "layout_29": { "layout": layout_29, "size_set": ["555x555"] },
    "layout_30": { "layout": layout_30, "size_set": ["555x555"] },
}

function layout_0(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-0">
<a class="single-image" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}
function plus(num, len) {
    return len > num ? `<div class="plus">+${len - num}</div>` : ""
}
function layout_1(links, len, sizes) {
    return `
<div class="bg-white border mt-2">
    <div class="feed-image p-2 px-3 layout-1">
        <a class="double-square-h" href="${prefix_img}${sizes[0]}/${links[0]}"
            style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
            <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
        </a>
        <a class="square" href="${prefix_img}${sizes[1]}/${links[1]}"
            style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
            <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
        </a>
        <a class="square" href="${prefix_img}${sizes[2]}/${links[2]}"
            style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
            <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
            ${plus(sizes.length, len)}
        </a>
    </div>
</div>
`}

function layout_2(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-2">
<a class="double-square-h" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-h" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_3(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-3">
<a class="double-square-v" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-v" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_4(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-4">
<a class="rectangle-h-8" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_5(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-5">
<a class="rectangle-h-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_6(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-6">
<a class="rectangle-v-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_7(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-7">
<a class="rectangle-v-8" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_8(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-8">
<a class="double-square-v" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_9(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-9">
<a class="square" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-v" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
<a class="square" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_10(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-10">
<a class="square" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-h" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />\
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_11(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-11">
<a class="rectangle-v-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8-8" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8-8" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_12(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-12">
<a class="rectangle-h-8-8" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
<a class="rectangle-h-8-8" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_13(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-13">
<a class="rectangle-h-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8-6" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8-6" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_14(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-14">
<a class="rectangle-v-8-6" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8-6" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_15(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-15">
<a class="rectangle-h-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_16(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-16">
<a class="rectangle-v-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_17(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-17">
<a class="square" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_18(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-18">
<a class="double-square-v" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_19(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-19">
<a class="rectangle-h-6-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-v" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
<a class="rectangle-h-6-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-6-4" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}


function layout_20(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-20">
<a class="rectangle-v-6-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="double-square-h" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_21(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-21">
<a class="double-square-h" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-6-4" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_22(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-22">
<a class="rectangle-v-8" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_23(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-23">
<a class="square square-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-8" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
<a class="square square-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
</div>
`}

function layout_24(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-24">
<a class="square square-4" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-h-8" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_25(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-25">
<a class="rectangle-h-8" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_26(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-26">
<a class="rectangle-v-3" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-3" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-3" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="rectangle-v-3" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_27(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-27">
<a class="square" href="${prefix_img}${sizes[0]}/${links[0]}"
    style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
    <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square" href="${prefix_img}${sizes[1]}/${links[1]}"
    style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
    <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[2]}/${links[2]}"
    style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
    <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[3]}/${links[3]}"
    style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
    <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
</a>
<a class="square square-4" href="${prefix_img}${sizes[4]}/${links[4]}"
    style="background-image: url('${prefix_img}${sizes[4]}/${links[4]}');">
    <img src="${prefix_img}${sizes[4]}/${links[4]}" alt="post-img" class="img-fluid img-responsive" />
    ${plus(sizes.length, len)}
</a>
</div>
`}

function layout_28(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-28">
    <a class="square square-4" href="${prefix_img}${sizes[0]}/${links[0]}"
        style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
        <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square square-4" href="${prefix_img}${sizes[1]}/${links[1]}"
        style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
        <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square square-4" href="${prefix_img}${sizes[2]}/${links[2]}"
        style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
        <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square" href="${prefix_img}${sizes[3]}/${links[3]}"
        style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
        <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square" href="${prefix_img}${sizes[4]}/${links[4]}"
        style="background-image: url('${prefix_img}${sizes[4]}/${links[4]}');">
        <img src="${prefix_img}${sizes[4]}/${links[4]}" alt="post-img" class="img-fluid img-responsive" />
        ${plus(sizes.length, len)}
    </a>
</div>
`}

function layout_29(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-29">
    <a class="square square-8" href="${prefix_img}${sizes[0]}/${links[0]}"
        style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
        <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square square-4" href="${prefix_img}${sizes[1]}/${links[1]}"
        style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
        <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square square-4" href="${prefix_img}${sizes[2]}/${links[2]}"
        style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
        <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="double-square-h double-square-8" href="${prefix_img}${sizes[3]}/${links[3]}"
        style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
        <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square square-4" href="${prefix_img}${sizes[4]}/${links[4]}"
        style="background-image: url('${prefix_img}${sizes[4]}/${links[4]}');">
        <img src="${prefix_img}${sizes[4]}/${links[4]}" alt="post-img" class="img-fluid img-responsive" />
        ${plus(sizes.length, len)}
    </a>
</div>  
 `}

function layout_30(links, len, sizes) {
    return `
<div class="feed-image p-2 px-3 layout-30">
    <a class="square square-4" href="${prefix_img}${sizes[0]}/${links[0]}"
        style="background-image: url('${prefix_img}${sizes[0]}/${links[0]}');">
        <img src="${prefix_img}${sizes[0]}/${links[0]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square square-8" href="${prefix_img}${sizes[1]}/${links[1]}"
        style="background-image: url('${prefix_img}${sizes[1]}/${links[1]}');">
        <img src="${prefix_img}${sizes[1]}/${links[1]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square square-4" href="${prefix_img}${sizes[2]}/${links[2]}"
        style="background-image: url('${prefix_img}${sizes[2]}/${links[2]}');">
        <img src="${prefix_img}${sizes[2]}/${links[2]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="square square-4" href="${prefix_img}${sizes[3]}/${links[3]}"
        style="background-image: url('${prefix_img}${sizes[3]}/${links[3]}');">
        <img src="${prefix_img}${sizes[3]}/${links[3]}" alt="post-img" class="img-fluid img-responsive" />
    </a>
    <a class="double-square-h double-square-8" href="${prefix_img}${sizes[4]}/${links[4]}"
        style="background-image: url('${prefix_img}${sizes[4]}/${links[4]}');">
        <img src="${prefix_img}${sizes[4]}/${links[4]}" alt="post-img" class="img-fluid img-responsive" />
        ${plus(sizes.length, len)}
    </a>
</div>       
`}