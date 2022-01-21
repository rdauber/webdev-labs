-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3

SELECT id, first_name, last_name FROM users ORDER BY last_name;


-- Exercise 4
SELECT id, image_url, user_id  FROM posts WHERE user_id=26;



-- Exercise 5

SELECT id, image_url, user_id FROM posts where user_id=12 or user_id=26;


-- Exercise 6

SELECT COUNT(*) FROM posts;


-- Exercise 7

SELECT user_id, count(*) FROM comments  GROUP BY user_id ORDER BY count(*) desc;


-- Exercise 8

SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name from posts
 INNER JOIN users ON users.id = posts.user_id
 WHERE posts.user_id=12 or posts.user_id=26;


-- Exercise 9

SELECT posts.id, posts.pub_date, following.following_id from POSTS
INNER JOIN following ON posts.user_id=following.following_id
WHERE following.user_id=26;


-- Exercise 10




-- Exercise 11
INSERT INTO bookmarks(user_id, post_id) VALUES(26, 219);
INSERT INTO bookmarks(user_id, post_id) VALUES(26, 220);
INSERT INTO bookmarks(user_id, post_id) VALUES(26, 221);

-- Exercise 12
 DELETE FROM bookmarks WHERE user_id=26 and post_id=219;
 DELETE FROM bookmarks WHERE user_id=26 and post_id=220;
 DELETE FROM bookmarks WHERE user_id=26 and post_id=221;



-- Exercise 13

UPDATE users SET email='cyoung2022@gmail.com' WHERE id=26;


-- Exercise 14
