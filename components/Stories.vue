<script lang="ts" setup>
import { vote } from '~~/api/vote';
const props = defineProps<{
    stories: any
}>()

const { stories } = props
</script>

<template>
    <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
        <tbody>
            <template v-for="(story, i) in stories">
                <tr class="athing" :id="story.id">
                    <td align="right" valign="top" class="title"><span class="rank">{{i + 1}}.</span></td>
                    <td valign="top" class="votelinks">
                        <center>
                            <a :id="`up_${story.id}`" class="clicky" href="#" @click="vote(story.id)">
                                <div class="votearrow" title="upvote"></div>
                            </a>
                        </center>
                    </td>
                    <td class="title">
                        <span class="titleline">
                            <a :href="story.url">{{story.title}}</a>
                            <span class="sitebit comhead"> (<a href="from?site=tomtom.com"><span class="sitestr">tomtom.com</span></a>)</span>
                        </span></td></tr><tr><td colspan="2"></td><td class="subtext"><span class="subline">
                        <span class="score" :id="`score_${story.id}`">{{126}} points</span> by 
                        <a href="user?id=gru" class="hnuser">gru</a> 
                        <span class="age" title="2022-11-02T08:28:21"><a href="item?id=33432720">2 hours ago</a></span> 
                        <span id="unv_33432720"></span> | <a href="flag?id=33432720&amp;auth=c888a3c76eb867e05c569aa5d397c169b2313f00&amp;goto=news">flag</a> | <a href="hide?id=33432720&amp;auth=c888a3c76eb867e05c569aa5d397c169b2313f00&amp;goto=news" class="clicky">hide</a> | <a href="item?id=33432720">85&nbsp;comments</a>        </span>
                    </td>
                </tr>
            </template>
  </tbody></table>
</template>