var webdriver = require('selenium-webdriver');
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://127.0.0.1:8089/rental');
driver.findElement(By.name("firstname")).sendKeys("Puvvada Naveen");
driver.findElement(By.name("phone")).sendKeys("6856787655");
driver.findElement(By.name("mail")).sendKeys("naveen27@gmail.com");
driver.findElement(By.name("rental_item")).sendKeys("shoes");
driver.findElement(By.name("StartDate")).sendKeys("02/27/2019");
driver.findElement(By.name("EndDate")).sendKeys("12/27/2019");
driver.findElement(By.name("fee")).sendKeys("200");
driver.findElement(By.xpath("//input[@value='Submit']")).click();