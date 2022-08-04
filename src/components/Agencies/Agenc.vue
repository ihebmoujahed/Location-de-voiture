<script setup>
import Agencie from "../../Agenceis";
</script>

<template>
<body>
    <div>
        <img src="https://avantgarde.tn/static/assets/images/background/bg-agence.png" alt="">
        <div v-for="elem in Agencie" :key="elem">
        <h1>{{ elem.title }}</h1>
        <p>{{ elem.name }}</p>

        </div>
    </div>
</body>
</template>