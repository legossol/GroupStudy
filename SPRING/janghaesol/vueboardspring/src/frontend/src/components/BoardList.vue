<template>
    <div>
        List Page
        <table border="1">
            <tr>
                <th align="center" width="80">번호</th>
                <th align="center" width="500">제목</th>
                <th align="center" width="200">작성자</th>
                <th align="center" width="300">등록일자</th>
            </tr> 
            <tr >

    </div>
</template>

<script>
    probs:{

    }
    export default {
        name: 'List'
        props: {
            boards:{
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>