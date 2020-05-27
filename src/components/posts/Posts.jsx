import React from "react";
import Post from "../post/Post";
import "./Posts.css";
const Posts = () => {
  const blogPosts = [
    {
      title: "Why we should appreciate Presidents Day?",
      body:
        "Recently, I was returning from an overseas trip that had a seven-hour layover in Philadelphia. So my colleagues and I took the opportunity to visit one of my favorite landmarks in the entire country, Independence Hall. It’s hard to enter its hallowed halls and not swell with pride.  Yet, this was the first time I entered the building after just returning from a foreign context. And, though it may sound cliche, it gave me a new appreciation for what it means to be American. In the country I had just been in, their culture is marked by some fairly significant divides, particularly as it relates to religion. As I was discussing this difference from American culture, my host remarked, “Yes, but things are different for America. There, people can just show up, declare they’re American, and that’s what they are. Here, your identity is set by your background.” Those words reverberated in my mind as I looked at the Rising Sun chair once used by George Washington and surveyed the yellowed walls of the space once occupied by James Madison, John Adams, and Thomas Jefferson—individuals who would all go on to lead our country. These men, from different backgrounds and areas, came together to forge a new enterprise for individual liberty and human flourishing. All the more remarkable is that this group set in motion the principle that all were free to join in and be part of this unprecedented project (though, some would argue, we’re still on our way to achieving that ambitious goal).  ",
      author: "BRENT LEATHERWOOD",
      img:
        "https://photo.kidzworld.com/images/2016122/2c39fe3d-86e6-4bb0-b77c-508b21c77eaf/presidents-day.jpg"
    },
    {
      title: "What’s the problem with political ads on social media?",
      body:
        "What categorizes something as “political”? Answering this question has become an increasing problem for social media platforms as those who run them prepare for the upcoming election cycle and adjust to the new norm of their influential role in society. The benefits and drawbacks of political advertising are currently being debated by social media giants. The political ads run by political action committees and candidates themselves can influence public opinion like never before with the ability to microtarget messaging to a very select group of people.        This type of targeting has led some to believe that these messages are being tailored specifically to fuel outrage against opponents, often through the use of fake news and misleading messages. On the other hand, these tools have led to the rise of relatively unknown candidates and causes to national prominence.Those who run these social media companies have every right to change the rules of use for their platforms, deciding what type of content can be posted and how they use advertising. Yet with the enormous power these companies hold over our society, many question if the public and the government should have any role in regulating the best path forward for our civil discourse, rather than leaving this decision in the hands of companies alone.",
      author: "JASON THACKER",
      img:
        "https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/SUC/facebook2-20191023054017933.jpg"
    },
    {
      title: "What you should know about the presidential debates",
      body:
        "Most Americans probably don’t realize this, but presidential debates are a relatively new phenomenon in our national political history. For most of our 243 years, campaigning generally was looked down upon by presidential candidates. While the 1858 debates between Abraham Lincoln and Stephen Douglas may come to mind, those storied interactions actually happened in the context of a campaign for U.S. Senate (though both would later be presidential candidates). What made these seven debates so important in American history was how the format allowed each candidate to give a full explanation of their philosophy of public service and the legislative solutions each man was advocating for on the most pressing issue in the public square, slavery. The first candidate was given one hour to make his case, followed by a rebuttal from the other candidate for an hour and a half. The first candidate was then given a half-hour to respond. Huge crowds gathered around Illinois to watch these events. They set the standard for debates in the American political system.Debates amongst presidential candidates competing in the same primary has a slightly longer history than general election debates. The first of its kind occurred between candidates competing for the Republican nomination in 1948. Democrats would do the same a few election cycles later in 1956.",
      author: "BRENT LEATHERWOOD",
      img:
        "https://s.abcnews.com/images/Politics/democratic-debate-night-2-group-07-gty-jef-190627_hpMain_16x9_992.jpg"
    },
    {
      title: "3 ways Christians can view politics as good works",
      body:
        "Some Christians maintain that they are not able to participate or serve in government faithfully as a Christian. They might say that politics is inherently dirty and corrupt. Therefore, to engage in politics sullies us and our witness. Or perhaps they will claim that government is a secular institution which cannot be mixed with our commitment to live by faith.However, I would argue that this is not the case. Political involvement can be a good enterprise for Christians to engage in. One way which can help us think through this biblically is to view political involvement through the lens of good works.What are good works?First, we must ask what good works are. In John 6:28-29, Jesus is asked, 'What must we do, to be doing the works of God?' He answers, 'This is the work of God, that you believe in him whom he has sent.' Therefore, as Martin Luther put it in his Treatise on Good Works, faith in Jesus Christ is 'the first and highest, the most precious of all good works.'",
      author: "NEAL HARDIN",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_President_of_the_United_States.svg/1200px-Seal_of_the_President_of_the_United_States.svg.png"
    }
  ];
  return (
    <div className="posts-container">
      {/* <Post post={blogPosts[0]} />
   <Post post={blogPosts[1]} />
      <Post post={blogPosts[2]} />
      <Post post={blogPosts[3]} />
      <Post post={blogPosts[4]} /> *
       */}
      {blogPosts.map((post, i) => (
        <Post key={i} i={i} post={post} />
      ))}
    </div>
  );
};

export default Posts;
