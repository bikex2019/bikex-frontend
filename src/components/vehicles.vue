<template>
    <div class="models mt-4">
       <div class="form row m-4 ">                    
              <div class="col-md-6 mb-4 text-left d-flex abc">
              <input type="checkbox"  id="box-1">
                <label for="box-1" class="mr-3">All</label>

                 <input type="checkbox"  id="box-2">
                <label for="box-2" class="mr-3">100CC</label>

                <input type="checkbox"  id="box-3">
                <label for="box-3" class="mr-3">200CC</label>

                 <input type="checkbox"  id="box-4">
                <label for="box-4" class="mr-3">250CC</label>
              </div>
            </div>
    </div>
</template>

<style scoped>
/*Checkboxes styles*/
input[type="checkbox"] { display: none; }

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font: 14px/20px 'Open Sans', Arial, sans-serif;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="checkbox"] + label:last-child { margin-bottom: 0; }

input[type="checkbox"] + label:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  color:red;
  border: 1px solid #FFB52F;
  position: absolute;
  left: 0;
  top: 0;
  opacity: .6;
  -webkit-transition: all .12s, border-color .08s;
  transition: all .12s, border-color .08s;
}

input[type="checkbox"]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>