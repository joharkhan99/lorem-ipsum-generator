const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet nisi vel efficitur mollis. Donec nisi est, pretium vel pretium eu, dignissim eu erat. Quisque semper maximus felis, ut sollicitudin nisi scelerisque at. Pellentesque sapien dolor, lobortis vel risus ut, tempor aliquet nunc. Praesent molestie lorem ligula, vitae convallis ipsum dapibus non. Aliquam erat volutpat. Fusce imperdiet accumsan lacus ac molestie.", "Donec sit amet metus nec massa posuere varius quis at velit. Aliquam erat volutpat. Donec molestie justo in dolor volutpat bibendum. Donec eu ligula ac mi consectetur pulvinar faucibus a sem. Vestibulum quis maximus ex. Curabitur ultricies luctus iaculis. Ut accumsan mattis feugiat. Fusce scelerisque vel lacus vitae laoreet.", "Vestibulum a erat augue. Aenean non metus nec dolor lacinia scelerisque vel et ex. Donec vel congue sapien. Pellentesque posuere, ipsum sed accumsan rutrum, augue turpis bibendum quam, ut euismod neque lorem id mi. Praesent nulla enim, egestas eu dui vel, dictum tempus arcu. Etiam malesuada, arcu sed maximus maximus, erat ante tincidunt nulla, eu eleifend tortor nibh eu sem.", "Suspendisse vulputate, velit sed tincidunt pharetra, ex sem dictum erat, sed sodales tortor augue ac nunc. Fusce cursus tincidunt augue quis congue. Donec sit amet molestie felis, tincidunt ullamcorper purus. Morbi ullamcorper metus arcu, et dignissim magna pharetra sit amet. Donec erat lacus, tempor eget scelerisque at, luctus ut risus. Etiam et lacus eu nunc aliquet tristique sit amet ac risus. Nunc justo felis, sollicitudin sed laoreet in, lacinia quis odio. Phasellus finibus tortor sed ipsum semper viverra. Nulla malesuada tempor nisl sed suscipit. Pellentesque libero leo.", "Vivamus vitae commodo lectus. Ut congue id tortor ac finibus. Aenean nibh eros, sodales sit amet hendrerit ut, suscipit id augue. Maecenas sit amet fermentum leo. Aliquam sed sagittis magna, eget ultrices tellus. Aenean arcu lacus, semper et dui vel, volutpat lacinia velit. Duis nibh massa, porta eu ipsum sed, placerat venenatis ligula.", "Nullam sagittis est at massa aliquam cursus. Nunc ac erat elementum, porttitor tortor in, eleifend nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio felis, dictum id enim non, finibus vestibulum enim. Nunc massa est, congue fringilla urna nec, volutpat hendrerit massa. Integer et faucibus est. Duis eu lorem pharetra, rhoncus lorem accumsan, dapibus nisl.", "Vestibulum consectetur a nulla vitae imperdiet. Morbi vitae augue eget neque pellentesque suscipit et blandit metus. Sed consequat vulputate ultrices. Nunc malesuada tincidunt nibh, ut pretium urna. Nulla in lobortis turpis. Nulla convallis, sapien in fermentum cursus, eros purus tempus purus, sit amet fermentum est orci et magna. Morbi dapibus massa efficitur leo vehicula, at accumsan elit luctus.", "Quisque eu molestie erat, et semper felis. Suspendisse in orci et tortor luctus mollis in sed turpis. Pellentesque turpis metus, hendrerit sit amet nibh at, tincidunt tincidunt nibh. Morbi dapibus orci ut varius posuere. Curabitur est orci, semper id ligula sed, semper condimentum orci. Praesent quis dui semper tellus fringilla commodo. Ut ut neque semper, consectetur neque vel, venenatis neque.", "In tortor libero, condimentum vel malesuada ac, pharetra ullamcorper diam. In at turpis eget ligula iaculis scelerisque. Suspendisse vehicula ante eleifend urna tristique euismod. Vestibulum quam nulla, eleifend sit amet dui a, varius ornare diam. In bibendum sit amet nunc non accumsan.", "Morbi a mauris velit. Duis at nisi sapien. Cras pulvinar velit et accumsan blandit. Ut massa lectus, aliquam quis risus eget, consequat porttitor magna. Sed vel maximus metus. Praesent vitae semper nunc. Pellentesque accumsan ligula nec commodo tempus. Nulla dignissim pharetra porta. Aenean in sagittis velit.", "Aliquam varius, mauris a facilisis pharetra, metus nisi consectetur enim, vel egestas eros enim eget dolor. Nunc imperdiet, nulla et venenatis pellentesque, ligula erat porta purus, et blandit lorem sem commodo mauris. Suspendisse consectetur ligula id consequat consectetur. Morbi quis faucibus mi, luctus finibus urna. Phasellus sed enim ut diam vestibulum porta. Vestibulum eu pellentesque nibh. Suspendisse potenti.", "Aliquam egestas aliquet sagittis. Nulla vitae nisl et massa dapibus gravida. Pellentesque id ligula nec nibh consectetur hendrerit eget non urna. Nullam quis velit id tellus convallis rhoncus. Maecenas sodales nulla ut pretium imperdiet. Aenean nec rhoncus mauris. Donec tristique ante enim, a efficitur leo vulputate consequat. Sed tristique dolor dolor. Nam justo nunc, dictum et ante in, tincidunt pharetra sem.", "Donec tincidunt laoreet sem eget vestibulum. Donec mattis, erat nec dictum fermentum, elit justo lobortis odio, sed vehicula orci erat in arcu. Suspendisse potenti. Nulla vel turpis non nibh accumsan condimentum. Pellentesque ipsum massa, aliquet sit amet blandit luctus, euismod id odio. Ut aliquam volutpat urna, in facilisis sem iaculis a. Integer non risus sapien. Vestibulum gravida feugiat massa, et aliquam libero porttitor ac.", "Morbi egestas pellentesque elit in rutrum. Nullam fermentum augue malesuada lectus iaculis, in suscipit libero mattis. Aliquam posuere egestas quam, non molestie diam porta egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non scelerisque lacus, vitae iaculis orci. Sed id bibendum nisl. Sed mattis sem porttitor rutrum vulputate. In pharetra augue at dapibus feugiat. Aliquam vulputate tempus finibus.", "Nam ac arcu maximus, dictum dui ut, molestie felis. Etiam at tristique quam, id efficitur sapien. Donec semper eget lacus nec cursus. Integer a mi dui. Vivamus sed libero sit amet sapien blandit condimentum. Aliquam non euismod enim. Quisque vel magna felis. Proin eget tellus sagittis, fringilla felis quis, ultricies orci.", "Donec ac feugiat justo. Suspendisse eu velit augue. Vestibulum rhoncus metus ac nulla congue, id porta tellus placerat. Curabitur tempor nulla at augue tempor fermentum. Praesent nec ultricies tellus, ut consectetur metus. Proin interdum enim in turpis fermentum, vitae blandit ligula ullamcorper.", "Donec sed blandit odio. Duis nec dapibus elit. Sed ultrices luctus tortor, sed condimentum diam tempus eget. Aenean non scelerisque diam, quis pellentesque nibh. Praesent aliquam, urna eu blandit tempor, nunc nulla posuere eros, ultricies facilisis ipsum tortor in risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
];

// paragraphs

const totalParas = document.querySelector('#paras');
const output = document.getElementById('output');

document.getElementById('submit1').addEventListener('click', () => {

  let str = "<br>";
  if (totalParas.value > paragraphs.length) {
    totalParas.value = paragraphs.length;
  }
  for (let i = 0; i < parseInt(totalParas.value); i++) {
    str += paragraphs[i] + "<br><br>";
  }
  output.innerHTML = str;
});


// words

let str = paragraphs.toString();
str = str.replace(/\.|,/g, ' ');
let words = str.split(' ');

const totalWords = document.querySelector('#words');

document.getElementById('submit2').addEventListener('click', () => {

  let str = "<br>";
  if (totalWords.value > words.length) {
    totalWords.value = words.length;
  }
  for (let i = 0; i < parseInt(totalWords.value); i++) {
    str += words[i] + "<br>";
  }
  output.innerHTML = str;
});
