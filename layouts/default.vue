<script lang="ts" setup>
useHead({
	title: 'Hacker News',
	link: [
		{
			rel: 'icon',
			href: '/logo.png'
		}
	]
})
</script>

<template>
	<center>
		<table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
			<tbody>
				<tr><Header></Header></tr>
				<tr id="pagespace" title="" style="height:10px"></tr>
				<tr>
					<td>
						<NuxtPage />
					</td>
				</tr>
				<tr><Footer></Footer></tr>
			</tbody>
		</table>
	</center>
</template>