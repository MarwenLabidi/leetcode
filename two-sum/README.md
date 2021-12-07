<h2>1. Two Sum</h2><h3>Easy</h3><hr><div style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Given an array of integers <code style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">nums</code>&nbsp;and an integer <code style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">target</code>, return <em style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">indices of the two numbers such that they add up to <code style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">target</code></em>.</p>

<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">You may assume that each input would have <strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><em style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">exactly</em> one solution</strong>, and you may not use the <em style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">same</em> element twice.</p>

<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">You can return the answer in any order.</p>

<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Example 1:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Input:</strong> nums = [2,7,11,15], target = 9
<strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Output:</strong> [0,1]
<strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Output:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Example 2:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Input:</strong> nums = [3,2,4], target = 6
<strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Output:</strong> [1,2]
</pre>

<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Example 3:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Input:</strong> nums = [3,3], target = 6
<strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Output:</strong> [0,1]
</pre>

<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Constraints:</strong></p>

<ul style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">
	<li style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">2 &lt;= nums.length &lt;= 10<sup style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">4</sup></code></li>
	<li style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">-10<sup style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">9</sup> &lt;= nums[i] &lt;= 10<sup style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">9</sup></code></li>
	<li style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">-10<sup style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">9</sup> &lt;= target &lt;= 10<sup style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">9</sup></code></li>
	<li style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Only one valid answer exists.</strong></li>
</ul>

<p style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<strong style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;<code style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">O(n<sup style="null;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/;/*startDM*/undefined/*endDM*/">2</sup>)&nbsp;</code>time complexity?</div>