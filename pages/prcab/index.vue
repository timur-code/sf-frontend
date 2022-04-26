<template>


    <div id="nav-drawer" data-region="drawer" class="d-print-none moodle-has-zindex " aria-hidden="false" tabindex="-1">
        <nav class="list-group" aria-label="Site">
            <ul>
                    <li>
                        <a class="list-group-item list-group-item-action active active_tree_node " href="https://moodle.astanait.edu.kz/" data-key="home"  >
                            
                                        
                                    <span class="media-body font-weight-bold">Home</span>
                               
                        </a>
                    </li>
                    <li>
                        <a class="list-group-item list-group-item-action  " href="https://moodle.astanait.edu.kz/my/" data-key="myhome">
                           
                                    <span class="media-body ">Dashboard</span>
                                
                        </a>
                    </li>
                   
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>


<style>
#nav-drawer {
    right: auto;
    left: 0;
}
@media (min-width: 576px){
   
}
[data-region="drawer"] {
    padding: 20px 20px;
}

[data-region="drawer"] {
    position: fixed;
    width: 285px;
    top: 50px;
    height: calc(100% - 50px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 999;
    background-color: #f2f2f2;
    -webkit-transition: right 0.5s ease,left 0.5s ease;
    -moz-transition: right 0.5s ease,left 0.5s ease;
    transition: right 0.5s ease,left 0.5s ease;
}
*, *::before, *::after {
    box-sizing: border-box;
}
таблица стилей агента пользователя
div {
    display: block;
}
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: .9375rem;
    font-weight: 400;
    line-height: 1.5;
    color: #1d2125;
    text-align: left;
    background-color: #fff;
}
</style>>

