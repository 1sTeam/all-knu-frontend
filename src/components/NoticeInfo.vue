<template>
    <div>
        <iframe 
            :src="url"
            width="100%"
            height="720px"
            frameborder="0" >
        </iframe>
    </div>
</template>


<script>
export default {
    name : "NoticeInfo",
    data(){
        return {
        url : this.$route.params.url
        }
    },

}
</script>