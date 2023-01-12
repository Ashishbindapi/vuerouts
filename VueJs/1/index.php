<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../vue.global.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="app">
        <input type="text" v-model="animal">
            <button @click="Addanimal">Add animal</button>
                <ul>
                    <li v-for="animal in animals">{{animal}} </li>
                </ul>
        <input type="text" v-model="car">
            <button @click="Addcar">Add Car</button>
                <ul>
                    <li v-for="car in cars">{{car}} </li>
                </ul>
        <input type="text" v-model="bycke">
            <button @click="Addbycke">Add Bycke</button>
                <ul>
                    <li v-for="bycke in byckes">{{bycke}}</li>
                </ul>        
    </div>
    <script src="./js/main.js"></script>
</body>
</html>                                                             