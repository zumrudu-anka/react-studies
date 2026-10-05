<p align="right">
  Türkçe / 
  <a href="https://github.com/zumrudu-anka/react-router-study/tree/master/README.en-US.md">English</a>
</p>

# React Router Çalışmalarım

## Notlar

### Browser Router Parametreleri

| Parametre  | Açıklama   |
|-------------- | -------------- |
| basename | Tüm konumlar için temel URL. Uygulamanız sunucunuzdaki bir alt dizinden sunuluyorsa, bunu alt dizine ayarlamak isteyeceksiniz. Düzgün biçimlendirilmiş bir taban adının başında eğik çizgi olmalı, ancak sonunda eğik çizgi olmamalıdır.|
| forceRefresh | Doğruysa, yönlendirici sayfa gezintisinde tam sayfa yenilemelerini kullanır. Bunu, sunucu tarafından oluşturulan geleneksel bir uygulamanın sayfa gezinme arasında tam sayfa yenilemeleriyle nasıl çalışacağını taklit etmek için kullanmak isteyebilirsiniz. |

### Route Üzerinden History, Location, Match Proplarını Kaybetmeden Prop Geçişi

- Bunun için burada örnek olarak Profile bileşeni üzerinde işlemler yapılmıştır. Route mekanizması örneği App bileşeni üzerinde bulunurken prop ile beraber geçiş örneği verilmiştir. Geçişlerden yalnızca birinde propların hepsi bileşene eklenmiş ve bu kullanımda sorun bulunmamaktadır(Son örnek). Fakat diğer geçişlerde proplar geçirilmemiş bu yüzden Profile bileşeninin içinde `export default WithRouter(Profile)` ifadesi kullanılmıştır. Böylece propların hepsine ulaşılmıştır.