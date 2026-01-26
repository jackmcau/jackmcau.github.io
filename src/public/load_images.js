function load_image(src, alt) {
    return `<div class="image_item">
                <img class="content image_item" src="${src}" alt="${alt}" loading="lazy">
            </div>`;
}
function load_2(list_src, alt) {
    return (`<div class="image_row">`
            + load_image(list_src[0], alt)
            + load_image(list_src[1], alt)
            + load_image(list_src[2], alt)
            + `</div>
            <div class="image_row">`
            + load_image(list_src[3], alt)
            + load_image(list_src[4], alt)
            + load_image(list_src[5], alt)
            + `</div>`);
}
function load_3(list_src, alt) {
    return (`<div class="image_row">`
            + load_image(list_src[0], alt)
            + load_image(list_src[1], alt)
            + `</div>
            <div class="image_row">`
            + load_image(list_src[2], alt)
            + load_image(list_src[3], alt)
            + `</div>
            <div class="image_row">`
            + load_image(list_src[4], alt)
            + load_image(list_src[5], alt)
            + `</div>`);
}
async function load_all() {
    all_images = {
        "grays":
            ["resources/grays/IMG_6653.png",
            "resources/grays/IMG_6659.png",
            "resources/grays/IMG_6664.png",
            "resources/grays/IMG_6668.png",
            "resources/grays/IMG_6674.png",
            "resources/grays/IMG_6680.png"],
        "sherman":
            ["resources/sherman/IMG_6617.png",
            "resources/sherman/IMG_6623.png",
            "resources/sherman/IMG_6626.png",
            "resources/sherman/IMG_6630.png",
            "resources/sherman/IMG_6633.png",
            "resources/sherman/IMG_6634.png"],
        "quandary":
            ["resources/quandary/IMG_6498.png",
            "resources/quandary/IMG_6515.png",
            "resources/quandary/IMG_6520.png",
            "resources/quandary/IMG_6526.png",
            "resources/quandary/IMG_6530.png",
            "resources/quandary/IMG_6543.png"]}

    if(window.matchMedia("(max-width: 768px)").matches) {
        for (const [key, value] of Object.entries(all_images)) {
            document.getElementById(key).innerHTML = load_3(value, `image of ${key}`);
        }
    } else {
        for (const [key, value] of Object.entries(all_images)) {
            document.getElementById(key).innerHTML = load_2(value, `image of ${key}`);
        }
    }
}
load_all()