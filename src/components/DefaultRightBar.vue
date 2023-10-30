<template>
    <div class="hidden md:block w-1/3 h-full border-l border-lighter px-6 py-2 overflow-y-scroll relative min-w-max">
        <SearchBar />
        <TrendingForYou />
        <WhoToFollow />
    </div>
</template>

<script>
import SearchBar from './SearchBar';
import TrendingForYou from './TrendingForYou';
import WhoToFollow from './WhoToFollow';


export default {
    name: 'DefaultRightBar',
    components: {
        SearchBar,
        WhoToFollow,
        TrendingForYou
    }
}
</script>

<style lang="scss" scoped></style>