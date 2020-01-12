<template>
  <div id="createNewListing">
    <div class="new-list">
      <div class="first-content">
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            Type
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item">Rent</div>
              <div class="item">Sale</div>
              <div class="item">Lease</div>
            </div>
          </div>
        </div>
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            Category
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item">Apartment</div>
              <div class="item">Townhouse</div>
              <div class="item">Mansion</div>
            </div>
          </div>
        </div>

        <div class="ui input">
          <input type="text" placeholder="Location" v-model="location" />
        </div>
        <div class="ui input">
          <input type="number" placeholder="Bedrooms" v-model="rooms" />
        </div>
        <div class="ui input">
          <input type="number" placeholder="Bathrooms" />
        </div>
        <div class="ui right labeled input">
          <input type="number" placeholder="Per Month" id="amount" />
        </div>
        <!-- <div class="ui simple dropdown item">
          Payment Terms
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">Per Month</div>
            <div class="item">Per Week</div>
            <div class="item">Entire</div>
          </div>
        </div> -->
      </div>
      <div class="second-content">
        <div class="ui simple dropdown item">
          Ensuite
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">Master</div>
            <div class="item">All</div>
            <div class="item">None</div>
            <div class="item">Not Disclose</div>
          </div>
        </div>
        <div class="ui simple dropdown item">
          Servant Quarters
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">Not Available</div>
            <div class="item">Available</div>
            <div class="item">Detached</div>
            <div class="item">Not Disclose</div>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>Internet</label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>Garden/Backyard</label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>Washing Area</label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>Children Area</label>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>Parking</label>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="ui primary basic button">
        <i class="cloud icon"></i>
        Upload Photos
      </button>
      <div>
        <button class="ui primary basic button">
          <i class="send user"></i>
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appNewPostForm",
  data() {
    return {
      type: "",
      category: "",
      location: "",
      rooms: "",
      baths: "",
      price: ""
    };
  },
  methods: {
    beforeOpen(event) {
      // eslint-disable-next-line no-console
      console.log(event);
      // Set the opening time of the modal
      this.time = Date.now();
    },
    beforeClose(event) {
      // eslint-disable-next-line no-console
      console.log(event);
      // If modal was open less then 5000 ms - prevent closing it
      if (this.time + this.duration < Date.now()) {
        event.stop();
      }
    }
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
@media only screen and (min-width: 962px) {
  .create-listing {
    background-color: bisque;
    width: 90%;
    transition: ease-in-out;
    transition-duration: 3000;
    padding: 1rem;
    margin: 1rem;
  }
  .new-list {
    display: flex;
    flex-direction: colum;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .first-content,
  .second-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 200px;
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    justify-content: space-between;
  }
  .third-content {
    display: flex;
    flex-direction: column;
    border: 1px solid green;
  }

  .first-content * {
    padding: 5px 0;
    width: 120px;
  }
  .second-content *,
  .third-content * {
    padding: 5px 0;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
  }
  .upload-area {
    width: 90%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem;
    padding: 0.1rem;
  }
  .photos-preview {
    width: 90%;
    background-color: aqua;
    height: 90px;
  }
}
@media only screen and (max-width: 961.999999999px) {
  .first-content,
  .second-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 200px;
    width: 70%;
    margin: 0 1rem;
    padding: 1rem;
    justify-content: space-between;
  }
  .first-content * {
    padding: 5px 0;
    width: 200px;
  }
  .second-content *,
  .third-content *,
  .actions * {
    padding: 5px 0;
  }
  .actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
  }
}
</style>
