<template>
  <div class="home">
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="card">
              <div class="card-content">
                <p>
                    Source: 2018 Census ACS 5 year survey
                </p>
                <p>
                    This project is a continuation of my senior capstone project showing rent/severe rent burdening, 
                    but expanded to show the problem on a national scale. A rent burdened household is defined as one 
                    that spends 25-50% of their income on rent. Severe rent burdening is one that spends 50%+. 
                    Map colors are mapped to burdening percentage, so a darker red indicates a higher rent burdening for a county.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Tableau
          :url="url"
          :height="height - 100"
          :width="width - 300"
          ref="tableau"
        >
        </Tableau>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-tableau";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
      url:
        "https://public.tableau.com/views/census_burdening/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link",
    };
  },
};
</script>

<style scoped>
.card{
    margin-top: 1%;
}
</style>
