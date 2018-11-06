var webdriver = require('selenium-webdriver');
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://localhost:8089/users/login');
driver.findElement(By.name("username")).sendKeys("a");
driver.findElement(By.name("password")).sendKeys("abc");
driver.findElement(By.xpath("//button[@type='submit']")).click(); 


var drive= new webdriver.Builder().forBrowser('chrome').build();
drive.get('http://localhost:8089/users/login');
drive.findElement(By.name("username")).sendKeys("a");
drive.findElement(By.name("password")).sendKeys("abc");
drive.findElement(By.xpath("//a[contains(text(),'Plays')]")).click();
drive.findElement(By.xpath("//form[@method='POST']//div//button[@type='submit']")).click();
drive.findElement(By.name("playname")).sendKeys("play1");
drive.findElement(By.name("PlayStartDate")).sendKeys("11/04/2018");
drive.findElement(By.name("PlayEndDate")).sendKeys("11/25/2018");
drive.findElement(By.xpath("//input[@value='Submit']")).click(); 

var drives= new webdriver.Builder().forBrowser('chrome').build();
drives.get('http://localhost:8089/rental');
drives.findElement(By.name("username")).sendKeys("a");
drives.findElement(By.name("password")).sendKeys("abc");
drives.findElement(By.xpath("//a[contains(text(),'Rentals')]']")).click(); 
drives.findElement(By.xpath("//a[contains(text(),'Rental form')]")).click(); 
drives.findElement(By.name("firstname")).sendKeys("Puvvada Naveen");
drives.findElement(By.name("phone")).sendKeys("6856787655");
drives.findElement(By.name("mail")).sendKeys("naveen27@gmail.com");
drives.findElement(By.name("rental_item")).sendKeys("shoes");
drives.findElement(By.name("StartDate")).sendKeys("02/27/2019");
drives.findElement(By.name("EndDate")).sendKeys("12/27/2019");
drives.findElement(By.name("fee")).sendKeys("200");
drives.findElement(By.xpath("//input[@value='Submit']")).click(); 