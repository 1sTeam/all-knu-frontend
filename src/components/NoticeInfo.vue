<template>
    <div>
        <iframe 
            :src="this.url"
            width="100%"
            height="700px"
            frameborder="0" >
        </iframe>
    </div>
</template>


<script>
export default {
    name : "NoticeInfo",
    props:["url"],
    data(){
        return {
        
        }
    },
    methods:{

    },

}
</script>