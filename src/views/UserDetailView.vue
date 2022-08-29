<!-- <script>
    export default {
        name:"UserDetailView",
        props: ["id", "name"],
        data() {
            return {
                id: "sladkjfalk23"
            }
        }
    };
</script> -->
<template>
    <h1>This is user detail</h1>
    <div>User ini memiliki ID : {{ $route.params.id }}</div>
</template>
