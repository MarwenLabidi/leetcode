<h2>11. Container With Most Water</h2><h3>Medium</h3><hr><div style="null;/*startDM*/undefined/*endDM*/"><p style="null;/*startDM*/undefined/*endDM*/">Given <code style="null;/*startDM*/undefined/*endDM*/">n</code> non-negative integers <code style="null;/*startDM*/undefined/*endDM*/">a<sub style="null;/*startDM*/undefined/*endDM*/">1</sub>, a<sub style="null;/*startDM*/undefined/*endDM*/">2</sub>, ..., a<sub style="null;/*startDM*/undefined/*endDM*/">n</sub></code><sub style="null;/*startDM*/undefined/*endDM*/"> </sub>, where each represents a point at coordinate <code style="null;/*startDM*/undefined/*endDM*/">(i, a<sub style="null;/*startDM*/undefined/*endDM*/">i</sub>)</code>. <code style="null;/*startDM*/undefined/*endDM*/">n</code> vertical lines are drawn such that the two endpoints of the line <code style="null;/*startDM*/undefined/*endDM*/">i</code> is at <code style="null;/*startDM*/undefined/*endDM*/">(i, a<sub style="null;/*startDM*/undefined/*endDM*/">i</sub>)</code> and <code style="null;/*startDM*/undefined/*endDM*/">(i, 0)</code>. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.</p>

<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Notice</strong> that you may not slant the container.</p>

<p style="null;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;;/*startDM*/undefined/*endDM*/">
<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> 49
<strong style="null;/*startDM*/undefined/*endDM*/">Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain&nbsp;is 49.
</pre>

<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Example 2:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> height = [1,1]
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> 1
</pre>

<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Example 3:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> height = [4,3,2,1,4]
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> 16
</pre>

<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Example 4:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> height = [1,2,1]
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> 2
</pre>

<p style="null;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Constraints:</strong></p>

<ul style="null;/*startDM*/undefined/*endDM*/">
	<li style="null;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/">n == height.length</code></li>
	<li style="null;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/">2 &lt;= n &lt;= 10<sup style="null;/*startDM*/undefined/*endDM*/">5</sup></code></li>
	<li style="null;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/">0 &lt;= height[i] &lt;= 10<sup style="null;/*startDM*/undefined/*endDM*/">4</sup></code></li>
</ul>
</div>