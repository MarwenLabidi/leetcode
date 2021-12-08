<h2>125. Valid Palindrome</h2><h3>Easy</h3><hr><div style="null;/*startDM*/undefined/*endDM*/"><p style="null;/*startDM*/undefined/*endDM*/">A phrase is a <strong style="null;/*startDM*/undefined/*endDM*/">palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p>

<p style="null;/*startDM*/undefined/*endDM*/">Given a string <code style="null;/*startDM*/undefined/*endDM*/">s</code>, return <code style="null;/*startDM*/undefined/*endDM*/">true</code><em style="null;/*startDM*/undefined/*endDM*/"> if it is a <strong style="null;/*startDM*/undefined/*endDM*/">palindrome</strong>, or </em><code style="null;/*startDM*/undefined/*endDM*/">false</code><em style="null;/*startDM*/undefined/*endDM*/"> otherwise</em>.</p>

<p style="null;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Example 1:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> s = "A man, a plan, a canal: Panama"
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> true
<strong style="null;/*startDM*/undefined/*endDM*/">Explanation:</strong> "amanaplanacanalpanama" is a palindrome.
</pre>

<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Example 2:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> s = "race a car"
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> false
<strong style="null;/*startDM*/undefined/*endDM*/">Explanation:</strong> "raceacar" is not a palindrome.
</pre>

<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Example 3:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> s = " "
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> true
<strong style="null;/*startDM*/undefined/*endDM*/">Explanation:</strong> s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
</pre>

<p style="null;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Constraints:</strong></p>

<ul style="null;/*startDM*/undefined/*endDM*/">
	<li style="null;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/">1 &lt;= s.length &lt;= 2 * 10<sup style="null;/*startDM*/undefined/*endDM*/">5</sup></code></li>
	<li style="null;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/">s</code> consists only of printable ASCII characters.</li>
</ul>
</div>