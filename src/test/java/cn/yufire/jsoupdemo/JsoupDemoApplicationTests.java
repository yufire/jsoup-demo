package cn.yufire.jsoupdemo;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class JsoupDemoApplicationTests {

    @Test
    void jsoupTest() throws IOException {
        Document document = Jsoup.connect("http://www.baidu.com").get();
        Element u1 = document.getElementById("u1");
        Elements a = u1.getElementsByTag("a");
        for (Element element : a) {
            System.out.println(element.text());
        }
//        System.out.println(document);
    }

    @Test
    public void xiaoshiuo() throws Exception{
        Document document1 = Jsoup.connect("https://read.qidian.com/chapter/KYZH_iR2BJ_Vl9ByXxZ_TQ2/aRsjb0zF8ulOBDFlr9quQA2").get();
        Elements elementsByClass = document1.getElementsByClass("content-wrap");
        for (Element byClass : elementsByClass) {
            System.out.println(byClass.text());
        }
    }

    @Test
    public void anjuke() throws Exception{
        Document document = Jsoup.connect("https://pds.zu.anjuke.com/fangyuan/zhanheb/?from=SearchBar").get();
        Elements zu_itemmod = document.getElementsByClass("zu-itemmod");
        for (Element element : zu_itemmod) {
            Element elementsByClass1 = element.getElementsByClass("zu-info").get(0);
            String title = elementsByClass1.getElementsByTag("b").get(0).text();

            Element address = elementsByClass1.getElementsByTag("address").get(0);
            String addressSu = address.text();

            System.out.println(title);
            System.out.println(addressSu);
            System.out.println("=====================================================");
        }

    }

    @Test
    public void tb() throws Exception{
        Document document = Jsoup.connect("https://s.taobao.com/search?q=java").get();

        System.out.println(document);
        Elements j_mouserOnverReq_ = document.getElementsByClass("J_MouserOnverReq");
        for (Element element : j_mouserOnverReq_) {
            Element element1 = element.getElementsByTag("div").get(1);
            System.out.println(element);
//            String price = element1.getElementsByTag("div").get(0).getElementsByTag("strong").text();
//            String buyNum = element1.getElementsByTag("div").get(0).getElementsByClass("deal-cnt").text();
//            String title = element1.getElementsByTag("div").get(1).text();
//            String address = element1.getElementsByTag("div").get(2).text();
//            System.out.println("￥"+price + "\t "+buyNum);
//            System.out.println(title);
//            System.out.println(address);

        }

    }

}
