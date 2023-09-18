<template>
    <div id="background">
        <div></div>
        <div><h1>L</h1></div>
        <div></div>
        <div><h1>E</h1></div>
        <div></div>
        <div><h1>O</h1></div>
        <div></div>
        <div><h1>N</h1></div>
        <div></div>
        <div><h1>E</h1></div>
        <div></div>
    </div>
</template>

<style scoped lang="scss">
#background {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    min-height: 100vh;
    opacity: .05;
    position: fixed;
    top: 0;
    left: 0;

    div {
        border-right: .5px black solid;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    h1 {
        font-size: 12rem;
        margin: 0;
    }
}
</style>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Background'
}
</script>