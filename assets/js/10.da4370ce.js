(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{207:function(_,t,v){"use strict";v.r(t);var r=v(0),a=Object(r.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"三、网络层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、网络层","aria-hidden":"true"}},[_._v("#")]),_._v(" 三、网络层")]),_._v(" "),v("h2",{attrs:{id:"_1、ip"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、ip","aria-hidden":"true"}},[_._v("#")]),_._v(" 1、IP")]),_._v(" "),v("p",[_._v("IP提供"),v("strong",[_._v("不可靠、无连接、无状态")]),_._v("的数据报传输服务。")]),_._v(" "),v("p",[v("strong",[_._v("不可靠")]),_._v("：它不保证数据报能成功的到达目的地（如果发生某些错误，比如路由器用完了缓冲区，IP处理方法就是丢弃，然后发送ICMP差错报文给信源端。所有的可靠性都由上层来保证）")]),_._v(" "),v("p",[v("strong",[_._v("无状态")]),_._v("：IP并不维护后续数据报的状态信息，每个数据报处理时都相互独立、没有上下文关系。因此缺点是无法处理乱序和重复的IP数据报。（IP数据报头部的标识字段是唯一标识一个IP数据报的，但它是用来处理IP分片和重组的，而不是用来指示接收顺序的")]),_._v(" "),v("p",[v("strong",[_._v("无连接")]),_._v("：指IP通信双方不长时间维持对方的任何信息，这样，上层协议每次发送数据的时候，都必须明确指定对方的IP地址。")]),_._v(" "),v("h3",{attrs:{id:"_1-1-ip首部格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ip首部格式","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.1 IP首部格式")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP%E9%A6%96%E9%83%A8.png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("版本")]),_._v(" : 有 4（IPv4）和 6（IPv6）两个值；")]),_._v(" "),v("p",[v("strong",[_._v("首部长度")]),_._v(": 占 4 位，标识该IP头部有多少个32bit字（4字节），因为4位最大能表示15，所以IP头部最长是60字节。因为固定部分长度为 20 字节，因此该值最小为 5。如果可选字段的长度不是 4 字节的整数倍，就用尾部的填充部分来填充。")]),_._v(" "),v("p",[v("strong",[_._v("服务类型")]),_._v("：包括3位优先级字段、1位保留字段和4位TOS字段。4为TOS分别表示：最小时延、最大吞吐量、最高可靠性和最小费用。其中最多有一个能置为1。")]),_._v(" "),v("p",[v("strong",[_._v("总长度")]),_._v("：指整个IP数据报的长度，以字节为单位，因此IP数据报的最大长度为65535（2^16-1）字节。但是由于MTU限制，长度超过MTU的数据报将会分片传输，所以实际传输的IP数据报长度远远没有达到最大值。以下3个字段描述了如何分片；")]),_._v(" "),v("p",[v("strong",[_._v("16位标识")]),_._v("：唯一标识主机发送的每一个数据报，其初始值是系统随机生成：每发送一个数据报，其值加1.该值在分片时被复制到每一个分片中，因此同一个数据报的所有分片都有相同的标识值。")]),_._v(" "),v("p",[v("strong",[_._v("3位标志")]),_._v("：这三位同一时刻也是只能有一个位的值能设置为1")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("R")]),_._v("：标志字段中的第一位是一个保留位，现在还没有使用，可能将来会用到这位")]),_._v(" "),v("li",[v("strong",[_._v("D")]),_._v("：标志字段中间的一位是 DF (Don’t fragment)，表示传输的数据不允许分片。一般DF = 1的话，表示数据一次性传输过去，不允许分片。超过MTU的数据将会丢弃并返回一个ICMP差错报文。")]),_._v(" "),v("li",[v("strong",[_._v("M")]),_._v("：标志字段的最低位是 MF (More fragment)。代表数据是否分片，如果MF位值为1，表示后面还有数据，还没有传输完毕，相当于数据分片，分批次传输，如果MF = 0表示最后一个分片或者只有一个分片。")])]),_._v(" "),v("p",[v("strong",[_._v("13位分片偏移")]),_._v("：是分片相对原始IP数据报开始处的偏移（仅指数据部分）。实际偏移值是该值左移3位得到的（以8字节为单位）。所以除最后一个分片，其他分片的数据部分长度必须是8的整数倍。")]),_._v(" "),v("p",[_._v("为什么是以8字节为单位？\n它是由IP头部格式中的“总长度（16bit）”和“偏移（13bit）”两个字段所决定的。总长度定义了IP包的最大长度为2^16 =64KB,偏移说明了IP分片时它最多能表示2^13 个偏移单位，这样偏移单位就是总长度除以偏移量得出片偏移单位（即2^16 / 2^13=2^3，即为8字节了）。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP%E5%88%86%E7%89%8701.png",alt:""}})]),_._v(" "),v("p",[_._v("因为偏移量是以8字节为偏移单位，对于分片1来说从0字节开始算，偏移量为0 / 8 = 0，对于分片2来说从1400字节开始算，偏移量为1400 / 8 = 175，对于分片3来说是从2800开始算，偏移量为2800 / 8 = 350。")]),_._v(" "),v("p",[_._v("片偏移为0表示这可能是第一个分片，也有可能是这个数据报文不支持分片。")]),_._v(" "),v("p",[_._v("另外，这些数据包分片的ip首部大部分都是一样的，因为它们都属于同一数据报文，对于数据进行重组就需要参考片偏移和标识这两个重要的字段，需要注意的是，片偏移是根据某一数据片的开始位置来计算的。")]),_._v(" "),v("p",[v("strong",[_._v("8位生存时间（TTL）")]),_._v("：设置了数据可以经过的最多的路由器数（一般是64），每经过一次路由器，该值减1，如果该值减为0依旧没有到达目的主机，就丢弃改数据报，发送ICMP差错报文（目标不可达）")]),_._v(" "),v("p",[v("strong",[_._v("8位协议")]),_._v("：用于区分上层协议。其中ICMP为1，TCP为6，UDP为17等等。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP%E5%8D%8F%E8%AE%AE.png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("16位首部校验和")]),_._v("：由发送端填充，接收端对其使用CRC算法检验IP数据报头部在传输过程中是否损坏（只检查头部，不管数据部分）")]),_._v(" "),v("p",[_._v("来看看IP数据报是"),v("strong",[_._v("如何检验")]),_._v("的：")]),_._v(" "),v("ol",[v("li",[_._v("在发送方，先把IP数据报首部划分为许多的16位字的序列，并把检验和字段置零。")]),_._v(" "),v("li",[_._v("在用反码算数运算把所有16位字相加后，将得到的和的反码写进检验和字段。")]),_._v(" "),v("li",[_._v("接收方收到数据报之后，将首部的所有16位字在使用反码算数运算相加一次，将得到的和取反码，即得出接收方检验和的计算结果。")]),_._v(" "),v("li",[_._v("我们根据接收方检验和结果判断，如果结果为0，表示此数据报有效，不为0就丢弃该数据报。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP%E6%A0%A1%E9%AA%8C.png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("32位源端IP地址和32位目的IP地址")]),_._v("：用来指定发送端和接收端的。")]),_._v(" "),v("h3",{attrs:{id:"_1-2-ip分片"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-ip分片","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2 IP分片")]),_._v(" "),v("p",[_._v("若IP协议在传输数据包时，IP报文长度大于转发接口的MTU，则将数据报文分为若干分片进行传输，分片报文到达接收方时，由接收方完成重组。")]),_._v(" "),v("p",[_._v("对于不同的传输层协议，在IP层上，需不需要进行分片是不同的：")]),_._v(" "),v("h4",{attrs:{id:"_1-2-1对于tcp来说"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1对于tcp来说","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.1对于TCP来说")]),_._v(" "),v("p",[_._v("它是尽量避免分片的。因为当在IP层进行了分片后，如果其中的某片数据丢失，则需对整个数据报进行重传。因为IP层本身没有超时重传机制，当来自TCP报文段的某一片丢失后，TCP在超时后重发整个TCP报文段，该报文段对应于一份IP数据报，没有办法只重传数据报中的一个数据报片。而且如果对数据报分片的是中间路由器，而不是起始端系统，那么起始端系统就无法知道数据报是如何被分片的，因此基于这种原因，TCP是经常要避免分片的。")]),_._v(" "),v("p",[v("strong",[_._v("那么TCP层是如何避免IP层的分片呢？")]),_._v("\n首先，TCP在建立连接时会进行3次握手，而在这3次握手中，客户端和服务端通常会协商一个值，那就是"),v("strong",[_._v("MSS（最长报文大小）")]),_._v("，用来表示本段所能接收的最大长度的报文段。MSS=MTU-TCP首部大小-IP首部大小，MTU值通过查询链路层得知。")]),_._v(" "),v("p",[_._v("当两端确认好MSS后进行通信，TCP层往IP层传输数据时，如果TCP层缓冲区的大小大于MSS，那么TCP层都会将其中的数据分组进行传输，这样就避免了在IP层进行分片。")]),_._v(" "),v("h4",{attrs:{id:"_1-2-2对于udp而言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2对于udp而言","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.2对于UDP而言")]),_._v(" "),v("p",[_._v("由于UDP是不需要保证可靠性的，没有超时和重传机制，这使得UDP很容易导致IP分片。")]),_._v(" "),v("p",[_._v("当IP数据报超过帧的MTU(最大传输单元)时，它将会被分片传输。分片能发生在发送端或者中转路由器，且在传输过程中可能被多次分片。在最后的目标机器上这些分片才会被内核的的IP模块重新组装。")]),_._v(" "),v("p",[_._v("在分片的数据中，传输层的首部只会出现在第一个分片中，如下图所示。因为传输层的数据格式对IP层是透明的，传输层的首部只有在传输层才会有它的作用，IP层不知道也不需要保证在每个分片中都有传输层首部。所以，在网络上传输的数据包是有可能没有传输层首部的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP%E5%88%86%E7%89%8702.png",alt:""}})]),_._v(" "),v("p",[_._v("在IPv4的头部信息中有3个字段专门为IP分片服务的:标识（16位）、标志（3位）、分片偏移（13位）。")]),_._v(" "),v("p",[_._v("以太网帧的MTU是1500字节，因此它的数据部分最大为1480字节(IP头部占用20字节)。为观察IP分片的数据报，这里采用ICMP协议发送一个长度为1501字节的IP数据报，其中IP头部占用20字节，ICMP报文占据1481字节。1481字节的ICMP数据报中含8字节ICMP头部，其他1473字节为数据部分。长度为1501的IP数据报被拆分为2个IP分片：")]),_._v(" "),v("ul",[v("li",[_._v("第1个IP分片：1480字节ICMP数据报文(含8字节的ICMP头部信息) + 20 字节IP头部信息 = 1500字节的IP数据报，设置了MF位")]),_._v(" "),v("li",[_._v("第2个IP分片：1字节的ICMP数据报文(不含8字节的ICMP头部信息) + 20 字节的IP头部信息 = 21字节的IP数据包，没有设置MF位。")])]),_._v(" "),v("p",[_._v("用户要发送的以太网帧：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP%E6%95%B0%E6%8D%AE%E6%8A%A5.jpg",alt:""}})]),_._v(" "),v("p",[_._v("分片后：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/IP%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%88%86%E7%89%87.jpg",alt:""}})]),_._v(" "),v("p",[_._v("当IP数据报被分片后，每一片都成为一个分组，具有自己的IP首部，并在选择路由时与其他分组独立，当数据报的这些片到达目的端时有可能会失序，但是在IP首部中有足够的信息让接收端能正确组装这些数据分片，传输过程中，哪怕丢失一片数据也要重传整个数据报。IP本身没有超时重传的机制，由更高层的TCP来完成，一些UDP应用程序也具有超时和重传。")]),_._v(" "),v("p",[_._v("在分片时，除最后一片外，其他每一片中的数据部（除IP首部外的其余部分）必须是8字节的整数倍。只有第一个分片携带四层信息，IP数据报（从传输层给网络层，由网络层发下来的数据叫数据报）是指IP层端到端的传输单元（分片之前和重组之后），分组（在网络中传输的叫分组）是指IP层和链路层之间传送的数据单元。一个分组可以是一个完整的IP数据报，也可以是IP数据报的一个分片。")]),_._v(" "),v("p",[_._v("当路由器收到一份需要分片的数据报，而在IP首部又设置了不分片（DF）的标志比特，路由器就会返回一个ICMP不可达信息。")]),_._v(" "),v("p",[_._v("MTU发现机制，在IPsec VPN中，要防止IP分片，因为有分片的话会严重影响效率，所以两台路由器都会做一个 path MTU发现技术，发送一个数据报为1500字节的IP数据报，并且DF置1。如果中间路由器MTU比1500小，就会对源端发送一个ICMP不可达信息，在这个ICMP不可达信息中，携带此路由器的最大MTU值，这时源端主机收到后修改数据报大小继续发送，如果中间路由器还有跟小的，又会向源发送一个ICMP不可达信息，源端主机再次修改，如此重复，只到到达目的地，就知道单向路径MTU的最小值了。")]),_._v(" "),v("h4",{attrs:{id:"_1-2-3分片带来的影响"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3分片带来的影响","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.3分片带来的影响")]),_._v(" "),v("p",[v("strong",[_._v("1、分片带来的性能消耗")]),_._v("\n分片和重组会消耗发送方、接收方一定的CPU等资源，如果存在大量的分片报文的话，可能会造成较为严重的资源消耗；\n分片对接收方内存资源的消耗较多，因为接收方要为接收到的每个分片报文分配内存空间，以便于最后一个分片报文到达后完成重组。")]),_._v(" "),v("p",[v("strong",[_._v("2、分片丢包导致的重传问题")]),_._v("\n如果某个分片报文在网络传输过程中丢失，那么接收方将无法完成重组，如果应用进程要求重传的话，发送方必须重传所有分片报文而不是仅重传被丢弃的那个分片报文，这种效率低下的重传行为会给端系统和网络资源带来额外的消耗。")]),_._v(" "),v("p",[v("strong",[_._v("3、分片攻击")]),_._v("\n黑客构造的分片报文，但是不向接收方发送最后一个分片报文，导致接收方要为所有的分片报文分配内存空间，可由于最后一个分片报文永远不会达到，接收方的内存得不到及时的释放（接收方会启动一个分片重组的定时器，在一定时间内如果无法完成重组，将向发送方发送ICMP重组超时差错报文，，只要这种攻击的分片报文发送的足够多、足够快，很容易占满接收方内存，让接收方无内存资源处理正常的业务，从而达到DOS的攻击效果。")]),_._v(" "),v("p",[v("strong",[_._v("4、安全隐患")]),_._v("\n由于分片只有第一个分片报文具有四层信息而其他分片没有，这给路由器、防火墙等中间设备在做访问控制策略匹配的时候带来了麻烦。\n如果路由器、防火墙等中间设备不对分片报文进行安全策略的匹配检测而直接放行IP分片报文，则有可能给接收方带来安全隐患和威胁，因为黑客可以利用这个特性，绕过路由器、防火墙的安全策略检查对接收方实施攻击；\n如果路由器、防火墙等中间设备对这些分片报文进行重组后在匹配其安全策略，那么又会对这些中间设备的资源带来极大的消耗，特别是在遇到分片攻击的时候，这些中间设备会在第一时间内消耗完其所有内存资源，从而导致全网中断的严重后果。")]),_._v(" "),v("h4",{attrs:{id:"_1-2-4重组"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4重组","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.2.4重组")]),_._v(" "),v("p",[_._v("为了重新组合这些数据报分片，接收主机在第一个分片到达时分配一个存储缓冲区。这个主机还将启动一个计时器。当数据报的后续分片到达时，数据被复制到缓冲区存储器中片偏移量字段指出的位置。当所有分片都到达时，完整的未分片的原始数据包就被恢复了。处理如同未分片数据报一样继续进行。")]),_._v(" "),v("p",[_._v("如果计时器超时并且分片保持尚未认可状态，则数据报被丢弃。这个计时器的初始值称为IP数据报的生存期值。它是依赖于实现的。一些实现允许对它进行配置。在某些IP主机上可以使用netstat命令列出分片的细节。如TCP/IP for OS/2中的netstat-i命令。")]),_._v(" "),v("p",[v("strong",[_._v("重组的步骤：")]),_._v("\n在接收方，一个由发送方发出的原始IP数据报，其所有分片将被重新组合，然后才能提交到上层协议。每一个将被重组的IP数据报都用一个ipq结构实例来表示，因此先来看看ipq这个非常重要的结构。")]),_._v(" "),v("p",[_._v("为了能高效地组装分片，用于保存分片的数据结构必须能做到以下几点：")]),_._v(" "),v("p",[_._v("1、快速定位属于某一个数据报的一组分组\n2、在属于某一个数据报的一组分片中快速插入新的分片\n3、有效地判断一个数据报的所有分片是否已经全部接收\n4、具有组装超时机制，如果在重组完成之前定时器溢出，则删除该数据报的所有内容")]),_._v(" "),v("h2",{attrs:{id:"_2、网际控制报文协议icmp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、网际控制报文协议icmp","aria-hidden":"true"}},[_._v("#")]),_._v(" 2、网际控制报文协议ICMP")]),_._v(" "),v("p",[_._v("ICMP 是为了更有效地转发 IP 数据报和提高交付成功的机会。它封装在 IP 数据报中，但是不属于高层协议。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/ICMP.jpg",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("类型")]),_._v("：占一字节，标识ICMP报文的类型，目前已定义了14种，从类型值来看ICMP报文可以分为两大类。第一类是取值为1~127的差错报文，第2类是取值128以上的信息报文。")]),_._v(" "),v("p",[v("strong",[_._v("代码")]),_._v("：占一字节，标识对应ICMP报文的代码。它与类型字段一起共同标识了ICMP报文的详细类型。")]),_._v(" "),v("p",[v("strong",[_._v("校验和")]),_._v("：这是对包括ICMP报文数据部分在内的整个ICMP数据报的校验和，以检验报文在传输过程中是否出现了差错。其计算方法与在我们介绍IP报头中的校验和计算方法是一样的。")]),_._v(" "),v("p",[_._v("ICMP报文分为两种类型:")]),_._v(" "),v("pre",[v("code",[_._v("1）ICMP差错报告报文，即通知出错原因的错误消息（如traceroute）  \n2）ICMP询问报文，即用于诊断的查询消息（如ping）\n")])]),_._v(" "),v("p",[v("strong",[_._v("差错报告报文")]),_._v("主要用来向 IP 数据报源主机返回一个差错报告信息， 这个错误报告信息产生的原因是路由器或主机不能对当前数据报进行正常的处理，例如无法将数据报递交给有效的协议上层，又例如数据报因为生存时间 TTL 为 0 而被删除等。")]),_._v(" "),v("p",[v("strong",[_._v("查询报文")]),_._v("用于一台主机向另一台主机查询特定的信息，通常查询报文都是成对出现的，即源主机发起一个查询报文，在目的主机收到该报文后，会按照查询报文约定的格式为源主机返回一个应答报文。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/ICMP%E5%88%86%E7%B1%BB.png",alt:""}})]),_._v(" "),v("p",[v("strong",[_._v("往返时间rtt")]),_._v("（round trip time）是应答时间-发送时间")]),_._v(" "),v("p",[v("strong",[_._v("生存时间ttl")]),_._v("（time to live）是IP首部中的一个字段，指的是报文能够在网络中存活的时间，一般ttl的值是255，不同系统的ttl值不一样。每经过一个路由器时，ttl值就减1，当减到0时，这个数据包就被路由器抛弃了。")]),_._v(" "),v("h3",{attrs:{id:"_2-1ping"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1ping","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.1Ping")]),_._v(" "),v("ul",[v("li",[_._v("能验证网络的连通性")]),_._v(" "),v("li",[_._v("会统计响应时间和TTL(IP包中的Time To Live，生存周期)")])]),_._v(" "),v("p",[_._v("Ping 的原理是通过向目的主机发送 ICMP Echo 请求报文，目的主机收到之后会发送 Echo 回答报文。Ping 会根据时间和成功响应的次数估算出数据包往返时间以及丢包率。")]),_._v(" "),v("h3",{attrs:{id:"_2-2traceroute"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2traceroute","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.2Traceroute")]),_._v(" "),v("p",[_._v("打印出可执行程序主机，一直到目标主机之前经历多少路由器。")]),_._v(" "),v("p",[_._v("Traceroute 发送的 IP 数据报封装的是无法交付的 UDP 用户数据报，并由目的主机发送终点不可达差错报告报文。")]),_._v(" "),v("ul",[v("li",[_._v("源主机向目的主机发送一连串的 IP 数据报。第一个数据报 P1 的生存时间 TTL 设置为 1，当 P1 到达路径上的第一个路由器 R1 时，R1 收下它并把 TTL 减 1，此时 TTL 等于 0，R1 就把 P1 丢弃，并向源主机发送一个 ICMP 时间超过差错报告报文；")]),_._v(" "),v("li",[_._v("源主机接着发送第二个数据报 P2，并把 TTL 设置为 2。P2 先到达 R1，R1 收下后把 TTL 减 1 再转发给 R2，R2 收下后也把 TTL 减 1，由于此时 TTL 等于 0，R2 就丢弃 P2，并向源主机发送一个 ICMP 时间超过差错报文。")]),_._v(" "),v("li",[_._v("不断执行这样的步骤，直到最后一个数据报刚刚到达目的主机，主机不转发数据报，也不把 TTL 值减 1。但是因为数据报封装的是无法交付的 UDP，因此目的主机要向源主机发送 ICMP 终点不可达差错报告报文。")]),_._v(" "),v("li",[_._v("之后源主机知道了到达目的主机所经过的路由器 IP 地址以及到达每个路由器的往返时间。")])]),_._v(" "),v("p",[v("strong",[_._v("怎么知道UDP到没到达目的主机呢")]),_._v("?\n这就涉及一个技巧的问题，TCP和UDP协议有一个端口号定义，而普通的网络程序只监控少数的几个号码较 小的端口，比如说80,比如说23,等等。而traceroute发送的是端口号>30000(真变态)的UDP报，所以到达目的主机的时候，目的 主机只能发送一个端口不可达的ICMP数据报给主机。主机接到这个报告以后就知道，主机到了。")]),_._v(" "),v("h2",{attrs:{id:"_3、网络地址转换-nat"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、网络地址转换-nat","aria-hidden":"true"}},[_._v("#")]),_._v(" 3、网络地址转换 NAT")]),_._v(" "),v("p",[_._v("专用网内部的主机使用本地 IP 地址又想和互联网上的主机通信时，可以使用 NAT 来将本地 IP 转换为全球 IP。")]),_._v(" "),v("p",[_._v("在以前，NAT 将本地 IP 和全球 IP 一一对应，这种方式下拥有 n 个全球 IP 地址的专用网内最多只可以同时有 n 台主机接入互联网。为了更有效地利用全球 IP 地址，现在常用的 NAT 转换表把传输层的端口号也用上了，使得多个专用网内部的主机共用一个全球 IP 地址。使用端口号的 NAT 也叫做网络地址与端口转换 NAPT。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/NAT.png",alt:""}})]),_._v(" "),v("h2",{attrs:{id:"_4、路由器分组转发流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、路由器分组转发流程","aria-hidden":"true"}},[_._v("#")]),_._v(" 4、路由器分组转发流程")]),_._v(" "),v("p",[_._v("从数据报的首部提取目的主机的 IP 地址 D，得到目的网络地址 N。")]),_._v(" "),v("p",[_._v("若 N 就是与此路由器直接相连的某个网络地址，则进行直接交付；")]),_._v(" "),v("p",[_._v("若路由表中有目的地址为 D 的特定主机路由，则把数据报传送给表中所指明的下一跳路由器；")]),_._v(" "),v("p",[_._v("若路由表中有到达网络 N 的路由，则把数据报传送给路由表中所指明的下一跳路由器；")]),_._v(" "),v("p",[_._v("若路由表中有一个默认路由，则把数据报传送给路由表中所指明的默认路由器；")]),_._v(" "),v("p",[_._v("报告转发分组出错。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%B7%AF%E7%94%B1%E5%88%86%E7%BB%84.jpg",alt:""}})]),_._v(" "),v("h2",{attrs:{id:"_5、路由选择协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、路由选择协议","aria-hidden":"true"}},[_._v("#")]),_._v(" 5、路由选择协议")]),_._v(" "),v("p",[_._v("路由选择协议都是自适应的，能随着网络通信量和拓扑结构的变化而自适应地进行调整。")]),_._v(" "),v("p",[_._v("互联网可以划分为许多较小的自治系统 AS，一个 AS 可以使用一种和别的 AS 不同的路由选择协议。")]),_._v(" "),v("p",[_._v("可以把路由选择协议划分为两大类：")]),_._v(" "),v("ul",[v("li",[_._v("自治系统内部的路由选择：RIP 和 OSPF")]),_._v(" "),v("li",[_._v("自治系统间的路由选择：BGP")])]),_._v(" "),v("h3",{attrs:{id:"_5-1内部网关协议-rip"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1内部网关协议-rip","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.1内部网关协议 RIP")]),_._v(" "),v("p",[_._v("RIP 是一种基于距离向量的路由选择协议。距离是指跳数，直接相连的路由器跳数为 1。跳数最多为 15，超过 15 表示不可达。")]),_._v(" "),v("p",[_._v("RIP 按固定的时间间隔仅和相邻路由器交换自己的路由表，经过若干次交换之后，所有路由器最终会知道到达本自治系统中任何一个网络的最短距离和下一跳路由器地址。")]),_._v(" "),v("p",[_._v("距离向量算法：")]),_._v(" "),v("ul",[v("li",[_._v("对地址为 X 的相邻路由器发来的 RIP 报文，先修改报文中的所有项目，把下一跳字段中的地址改为 X，并把所有的距离字段加 1；")]),_._v(" "),v("li",[_._v("对修改后的 RIP 报文中的每一个项目，进行以下步骤：")]),_._v(" "),v("li",[_._v("若原来的路由表中没有目的网络 N，则把该项目添加到路由表中；")]),_._v(" "),v("li",[_._v("否则：若下一跳路由器地址是 X，则把收到的项目替换原来路由表中的项目；否则：若收到的项目中的距离 d 小于路由表中的距离，则进行更新（例如原始路由表项为 Net2, 5, P，新表项为 Net2, 4, X，则更新）；否则什么也不做。")]),_._v(" "),v("li",[_._v("若 3 分钟还没有收到相邻路由器的更新路由表，则把该相邻路由器标为不可达，即把距离置为 16。")])]),_._v(" "),v("p",[_._v("RIP 协议实现简单，开销小。但是 RIP 能使用的最大距离为 15，限制了网络的规模。并且当网络出现故障时，要经过比较长的时间才能将此消息传送到所有路由器。")]),_._v(" "),v("p",[_._v("缺点：\n1). RIP的15跳限制，超过15跳的路由被认为不可达\n2). RIP不能支持可变长子网掩码(VLSM)，导致IP地址分配的低效率\n3). 周期性广播整个路由表，在低速链路及广域网云中应用将产生很大问题\n4). 收敛速度慢于OSPF，在大型网络中收敛时间需要几分钟\n5). RIP没有网络延迟和链路开销的概念，路由选路基于跳数。拥有较少跳数的路由总是被选为最佳路由即使较长的路径有低的延迟和开销\n6). RIP没有区域的概念，不能在任意比特位进行路由汇")]),_._v(" "),v("h3",{attrs:{id:"_5-2内部网关协议-ospf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2内部网关协议-ospf","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.2内部网关协议 OSPF")]),_._v(" "),v("p",[_._v("开放最短路径优先 OSPF，基于链路状态及最短路径树算法，是为了克服 RIP 的缺点而开发出来的。\nOSPF 具有以下特点：")]),_._v(" "),v("ul",[v("li",[_._v("向本自治系统中的所有路由器发送信息，这种方法是洪泛法。")]),_._v(" "),v("li",[_._v("发送的信息就是与相邻路由器的链路状态，链路状态包括与哪些路由器相连以及链路的度量，度量用费用、距离、时延、带宽等来表示。")]),_._v(" "),v("li",[_._v("只有当链路状态发生变化时，路由器才会发送信息。")])]),_._v(" "),v("h3",{attrs:{id:"_5-3外部网关协议-bgp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3外部网关协议-bgp","aria-hidden":"true"}},[_._v("#")]),_._v(" 5.3外部网关协议 BGP")]),_._v(" "),v("p",[_._v("BGP（Border Gateway Protocol，边界网关协议）")]),_._v(" "),v("p",[_._v("AS（自治系统）之间的路由选择很困难，主要是由于：")]),_._v(" "),v("ul",[v("li",[_._v("互联网规模很大；")]),_._v(" "),v("li",[_._v("各个 AS 内部使用不同的路由选择协议，无法准确定义路径的度量；")]),_._v(" "),v("li",[_._v("AS 之间的路由选择必须考虑有关的策略，比如有些 AS 不愿意让其它 AS 经过。")])]),_._v(" "),v("p",[_._v("BGP 只能寻找一条比较好的路由，而不是最佳路由。")]),_._v(" "),v("p",[_._v("每个 AS 都必须配置 BGP 发言人，通过在两个相邻 BGP 发言人之间建立 TCP 连接来交换路由信息。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Hewie8023/VueBlogImg/master/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/BGP.png",alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);