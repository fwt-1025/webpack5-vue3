const views = async (dir) => {
    let o
    o = await import(`@/views/${dir}/index.vue`)
    return o.default
};
export {
    views
}
