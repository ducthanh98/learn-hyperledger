# Blockchain
## BLockchain là gi ?
```
    Blockchain là hệ thống cơ sở dữ liệu cho phép lưu trữ và truyền tải các khối thông tin (block) được liên kết với nhau nhờ mã hóa.Các khối thông tin này hoạt động độc lập và có thể mở rộng theo thời gian. Chúng được quản lý bởi những người tham gia hệ thống chứ không thông qua đơn vị trung gian.
```
## Tại sao blockchain lai bảo mật 
### Mạng ngang hàng (P2P) :
- Mạng ngang hàng-P2P là một mô hình giao tiếp phi tập trung giữa hai mạng ngang hàng hay còn được gọi là các node, có thể giao tiếp với nhau mà không cần máy chủ trung tâm.
- Mỗi node giữ một bản sao của các tệp, đóng vai trò là máy khách và máy chủ cho các node khác.
- Các loại P2P:
    - **Unstructured P2P Networks**: 
        - Đây là loại mạng P2P mà trong đó, các node được thiết lập ngẫu nhiên. Loại mạng này có khả năng chống lại việc một số node thường xuyên tham gia và rời khỏi mạng.
        - Ví dụ: Một nền tảng xã hội được triển khai trên mạng P2P không có cấu trúc có thể sử dụng nó một cách hiệu quả, vì người dùng có thể chọn tham gia hoặc rời khỏi mạng thường xuyên.

        - Tuy nhiên, dù dễ xây dựng hơn mạng P2P có cấu trúc nhưng chúng lại sử dụng bộ nhớ và CPU cao hơn. Vì khi tìm kiếm một nội dung, yêu cầu tìm kiếm sẽ được truyền trên cả mạng để tìm ra càng nhiều máy chia sẻ càng tốt. Điều này khiến mạng có thể luôn tràn ngập các yêu cầu tìm kiếm. Bên cạnh đó, mạng P2P không cấu trúc không thể đảm bảo việc tìm kiếm một nội dung sẽ sẽ thành công
    - **Structured P2P Networks**:
        - Đây là loại mạng ngang hàng mà các node được xây dựng theo một cấu trúc cụ thể. Cho phép các node tìm kiếm tệp nhanh chóng, ngay cả khi nội dung đó không phổ biến.

        - Bên cạnh đó, mạng P2P có cấu trúc đã sử dụng hệ thống DHT (Distributed Hash Table) để khắc phục nhược điểm có thể tìm kiếm không thành công của mạng P2P không cấu trúc.

        - Tuy mang lại hiệu quả cao nhưng mạng P2P có cấu trúc lại có mức độ tập trung cao hơn. Ngoài ra mức chi phí thiết lập cùng bảo trì cũng cao hơn.


    - **Hybrid P2P Network**:
        - Đây là loại mạng P2P kết hợp giữa cấu trúc truyền thống (máy chủ và máy khách) cùng cấu trúc mạng ngang hàng.
        - Chức năng tập trung được cung cấp bởi mạng có cấu trúc và sự bình đẳng của node được cung cấp bởi mạng không có cấu trúc đã tạo ra sự cân bằng trên mạng kết hợp.
        So với hai loại mạng P2P trên thì mạng kết hợp dễ xây dựng hơn. Ngoài ra chúng còn thừa hưởng tất cả các ưu điểm và hiệu suất hoạt động cũng tốt hơn.
### Proof-of-Work
- Cơ chế đồng thuận được thiết kế để giải quyết vấn đề lòng tin giữa những người tham gia mạng blockchain
- Khi thực hiện giao dịch trên Blockchain, nó sẽ được gom vào một Block cùng một số giao dịch khác. Các thợ đào sẽ sử dụng hệ thống máy đào gồm nhiều máy tính mạnh để xác minh giao dịch.
- Một câu đố toán học phức tạp sẽ được hệ thống đưa ra. Nhiệm vụ của thợ đào là sử dụng sức mạnh của hệ thống đào tìm ra câu trả lời, sau khi tìm được sẽ thông báo cho các thợ đào còn lại. Khi phần lớn thành viên xác nhận đó là câu trả lời đúng, Block mới sẽ được tạo ra, giao dịch được xác nhận.
- Khi hoàn thành, thợ đào sẽ nhận được phần thưởng là phí giao dịch và phần thưởng khối. Nói một cách ẩn dụ, quá trình trên được gọi là “mining” (“khai thác”). Tuy nhiên, để quy tắc “longest-chain-wins” hoạt động an toàn, việc thêm các khối mới vào Block được thiết kế khá khó – tức là vừa tốn kém vừa mất thời gian. 

- Một vấn đề là PoW đòi hỏi nhiều lần thử lặp đi lặp lại – tiêu tốn sức mạnh tính toán đáng kể. Như Sam Beckett đã nói, vấn đề chủ yếu xoay quanh việc “try again, fail again, fail better” (tạm dịch: thử lại, thất bại lần nữa, thất bại nhưng đã tốt hơn). 
###  Proof-of-Stake
- Cũng giống như Proof-of-Work, Proof-of-Stake được thiết kế để đạt được sự đồng thuận phân tán về thứ tự hợp lệ của các giao dịch.
- Trong các blockchain sử dụng Proof-of-Stake, các node trong mạng tham gia vào việc xác thực các block (khối), thay vì phân bổ tài nguyên máy tính để “khai thác” chúng. 
- Tiền điện tử Ether (ETH) là một ví dụ điển hình về một dự án hiện đang trong quá trình chuyển đổi từ blockchain Proof-of-Work sang blockchain Proof-of-Stake.
# NFT là gì ?
- NFT là một loại tài sản kỹ thuật số có chứa thông tin về quyền sở hữu được lưu giữ trên blockchain. NFT được dùng để xác thực kỹ thuật số các món hàng như tác phẩm nghệ thuật, vật phẩm game,...  được lưu giữ trên mạng blockchain Etherum, Solana, … 
- Sự hình thành, phát triển và tiềm năng của mô hình Play to Earn. Người dùng có thể vừa tham gia trò chơi vừa có cơ hội kiếm được các vật phẩm NFT để kiểm tiến. Ngoài ra các nghệ sĩ, họa sĩ, nhà phát triển game… token hóa thành quả lao động của mình. 
- Nơi lưu trư:
    - Tạo Token ERC-721 đến từ việc lưu trữ các tài sản cơ bản. Nếu lưu trữ trực tiếp trên blockchain thì chi phí quá lớn 
    - IPFS là viết tắt của từ Interplanetary File System, một hệ thống tập tin phân tán ngang hàng kết nối tất cả các thiết bị máy tính với nhau.
    - IPFS là mạng phi tập trung ngang hàng cho phép người dùng sao lưu các tệp và trang web bằng cách lưu trữ chúng trên nhiều trang.
    - Điều này đảm bảo rằng nội dung có khả năng chống lại sự kiểm duyệt và các điểm lỗi tập trung như sự cố máy chủ hoặc các cuộc tấn công phối hợp.
# Metaverse là gì? 
    Metaverse là một môi trường kỹ thuật số hoạt động trên blockchain. Tại đây, các công nghệ như VR và AR đóng vai trò cung cấp thành phần trực quan, còn phương tiện phi tập trung cung cấp cơ hội kinh doanh và tương tác xã hội không giới hạn. Những môi trường này có thể mở rộng, tương tác, đa năng và kết hợp các công nghệ sáng tạo cũng như mô hình tương tác giữa người tham gia ở cả cấp độ cá nhân và doanh nghiệp.
# Mối quan hệ NFT và Metaverse
- Nền kinh tế mở và công bằng
```
    Người dùng và doanh nghiệp có thể chuyển các tài sản và dịch vụ trong thế giới thực vào một môi trường phi tập trung ảo được gọi là metaverse. Một cách thức để mời gọi nhiều tài sản trong thế giới thực hơn vào metaverse là sử dụng các mô hình chơi game sáng tạo kết hợp với các trò chơi blockchain có thể tương tác.

```
- Quyền sở hữu tài sản
```
    Với NFT, người dùng có thể toàn quyền sở hữu các vùng đất và không gian ảo của họ trong metaverse. Blockchain cơ bản cho phép người dùng chứng minh quyền sở hữu tài sản và phát triển bất động sản ảo của mình như mong muốn.
```
# Ứng dụng NFT
- Vay thế chấp NFT : https://drops.co/
- Tạo bộ suu tập độc nhất 
- Mua bán đất ảo 
- Lưu trữ thông tin 

# ERC
- Tiêu chuẩn cho các token phải tuần theo 
- ERC721: 
    - tiêu chuẩn này nhằm mục đích tạo ra các token có thể hoán đổi cho nhau
    - Token trong ERC 721 là duy nhất và đại diện cho một tài sản duy nhất
- ERC1155:
    - Mục tiêu là tạo ra một giao diện hợp đồng thông minh có thể đại diện cho cả SFT và NFT
    - Chuyển Tiền Hiệu Quả: có thể chọn chuyển nhiều token trong cùng một hoạt động. Nó không chỉ làm giảm chi phí giao dịch mà còn giảm thiểu tác động đến network.
    - Nhiều Tokens Trong 1 Hợp Đồng Duy Nhất
- Khác biệt: 
    -  tiêu chuẩn ERC-721 chỉ tạo ra NFT và buộc các nhà phát triển phải tạo một hợp đồng thông minh cho mỗi token
    - ERC-1155 cho phép các nhà phát triển phát triển một hợp đồng thông minh duy nhất có thể được sử dụng để tạo các token hoặc NFT
    -  Vì ERC-721 cho phép thực hiện một thao tác duy nhất nên mỗi giao dịch rất tốn kém và mất thời gian
    - ERC-1155 cho phép thực hiện nhiều thao tác trong một giao dịch nên nó rẻ hơn và hiệu quả hơn

# Kiến trúc của một mạng Hyperledger Fabric
![Architecture](data:image/png;base64,UklGRkg6AABXRUJQVlA4WAoAAAAsAAAAOAMAdgEASUNDUHQCAAAAAAJ0YXBwbAQAAABtbnRyUkdCIFhZWiAH3AALAAwAEgA6ABdhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGxmSfnZPIV3n7QGSpkeOnQsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAAGNkc2NtAAABbAAAACxjcHJ0AAABmAAAAC13dHB0AAAByAAAABRyWFlaAAAB3AAAABRnWFlaAAAB8AAAABRiWFlaAAACBAAAABRyVFJDAAACGAAAABBiVFJDAAACKAAAABBnVFJDAAACOAAAABBjaGFkAAACSAAAACxkZXNjAAAAAAAAAAlIRCA3MDktQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbWx1YwAAAAAAAAABAAAADGVuVVMAAAAQAAAAHABIAEQAIAA3ADAAOQAtAEF0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBDb21wdXRlciwgSW5jLiwgMjAxMAAAAABYWVogAAAAAAAA81IAAQAAAAEWz1hZWiAAAAAAAABvoQAAOSMAAAOMWFlaIAAAAAAAAGKWAAC3vAAAGMpYWVogAAAAAAAAJJ4AAA87AAC2znBhcmEAAAAAAAAAAAAB9gRwYXJhAAAAAAAAAAAAAfYEcGFyYQAAAAAAAAAAAAH2BHNmMzIAAAAAAAEMQgAABd7///MmAAAHkgAA/ZH///ui///9owAAA9wAAMBsVlA4IFw1AAAQCQGdASo5A3cBPpFCnUslo6Mho9OayLASCWVu+Cy0Bo5/GOoKW/uX+07kmgfMn7f/J+mtyP3k/ANVqzM6g/jeXzzf52/9D6s/1j7BH9n8uL1X/uz6iv6V/q/WP/5v7se6v+teoB/VP8x65Hqh/un7A/7t+nZ7Nn99/83ppde10u/Vv/H9sf+e/vXkP5KPWXuP69f+l4e+o//F6F/zP7tfsv757Y/4/vb+KX+B/iPYI/Jf53/tPF72aG2f730C/bP6x/1P8j6/nzf/S9C/s9/3PcA/nX90/7nlu+EJ+R/5HsB/1X/Q+hz/5/7z0VfVX/z/2PwJ/sP1q/3b///vBk2bT/xtudlMi7imPc7xCF4+H/jIllwTwVzkW7rx8P/GRLLgngrnIt3Xj4f+Mhciu7BmDPmCrU72do23Ozr2NkVd2veYTf0o+4Uu2wUXGkBwOqLqazmkY2GBmR1quzBkBfry/kBVIDBm0/8bbnZ16rqAukQuwLMtRrnZ17G24+0HSmgaSXVWnjA0wDxHR3hXJ9GokOqksshbZ21yCgsuv4xOPx5np2g1OcUvg4nsbbnZ17G252dexR0ZIrojUiQ+lbC7Mdun9rRaxzJbO03p0CTu+IZFPfQHp7nJ9ghpIbnw9EkzA3fFKaZDrCC8n52Ofwqo/YxMPYvUXk9f287QdNBKZn9Oacl3zaxA7bnZ17G25zpXuutHc/k80YthWKjHEYBD46fbX37Tp59fTIITgvWVCXBF1Y38bUlT7Bh849Olcq7jVgTM/GI/zLRriK3/fgflxEh0FvmQgryjVBfSPPp/423Ozr2Ntzs52Trn64c31MFGo3qz9mAPkERtiQXc7TfgRQWRfikYKzqqvlps3pj/4sayYcOwcqJPYZiaH0yP2afI7K4VaUcx4XFnW1OrPNd2hA9B4Hp8jtG252dextudnRTFU0gdlTw0WwJD4P+38xHUmeo7aspCGAOrxR2zahcbkKa9oTC5uw3T69pMjvGS/Hnlzl2wLRMLkyA2TjcWnMiF0zyIWLidNQqycgWR8fRLbUHPG3ybC/Dul60NohKVh8+FbZvYpedrdc5p9p7N/u0bbnZ17G252ddZxEWsnHSTzGE9NOFMfkol8kEOaMAGY1b2RfhTeLO+Q/QRDs7UtEFOx52W3kLY5ZDqNLw3PnxjBa/FNxMx1BBS3pHY3ayiYxLDBg9mLgHdZrz72hqHrPttzkUyGVFC34uOHyqT/af+Ntzs65ozYRC2ZxcOY+xAO1DSSWZerQ2UMyQcezBW2nh0P+oL8w9qexgDoKeH3OyYUwJhypbUu7njzyg/oIlkfcc59m16pYUGzu1uM2vW2JxDv16EOuZQvqGwtj+QaQixFQwga7ynV/qobbJIRiGZIOQGDMkIxDNxFeDLn2bXqcFPm+t0A/KVLVScza6D173RoBKjOaznAS3dFjS/FWYcMX7Lc+YeOAARqGX0K7GXlo23Jybei7PYa0hxgzacupcU2J4x1TEeD/DnnNsZZC//2s4Ui1U0mazYm3tkinohYnxmfwyd3HP4Ky2Jtul9/cnHPWtgVy1IDVc1wbOKV6aZ878qCXsLQ+vn4zJmbc+za9aCzrpmsFWD1/RdnpJ8cAEUBVts8dOg4h1r95/iBhgqgN08XOohq/remSZ9nXo4AxOFZAqPSY821wn/8ba4X1/MLaBhcsoHsy8VIRoYXKqWtbMwOFog9CEge3BqdlVS5gFomadO69zs69jZvQ4bVptC2SWofDTmFh00ofwVwSOsyQwi/MiV4M75vU24PQ/8yv9gSCJUiREhRGpx5Da4iU1xUmz/CUjn02Pa5Gf+V10dZj19bh6DMujRMgX2eKkSMPCnhB4yTr02KE+5JT0u0Bgzaf9oG+SWAqusGudTsh/xkINqkV/xkSy3bbOZVOdNCIiaJ9I7LK0xMQCxiDP+DsxChLNWeZg8vDEv1+OjjIeCkcF6c4GZ2hwqNf7kvybyJuTXPjaiE+/c+LnnVgsJUE9CTa9jbc7OinGR/PVN76i6KJtP+r/NHj/agS1C7pqTV//5HQBD/qIb/af+Ntzs69jbW+v5Elv8LDeMLMWQTLsQOyWzeVP/G2pKPyq/jUBgzaf+Ntzs69jbc7OvY2bjAgVQY3Yd5kYZWobeME8bFjE5bgVd2IHZLZvKn/jbUnuZPhQSAwZtP/G252dextudnXsXY2ajZbB7bAQbfp43mNcoF2ez0/L9F2gHocI0AfW9LSa74mQxa6CAWdgAH7clV0XaAwZtP/G252des9+9tpqD8PLfzH2lZV0CVay6x+iCvr+wuScfhN24qiiQGDNktPI+Yz/HR2vf6f9TgKZIOlDaTOMc8VNdJKHd/Dq2WywZtP/G252dextuc3hVJbk2Qax6N0vECi75fZHud6WQWFI//dHTzrKmPovAHiE0817Nr2LFSluTB1PHKQWbtaGPKCzpSlasD82iPUVaQjPvJtP/G252dextqWGrJKV7MJx/ujZ8FdxnycAq+Yel9oJGPJ3wCkX8erTW2aJxXQyboxlf1QPWhWX9v7AAkdCpBibJzTMKdCigNcbbnNt5nDqSJ8Yv22Um6Py4AZ0Giulg2W7yNm7hUNCXjPUT5Bgirp2b0CeNaxA7bnZ17G2p6c6sBUZv7/1UxM3+BM7uCTYHRsNg8+veBiFZTwDHW9qFz9I+TSsWm7MSfzKaAnQxsUFPe8iWXBOyCuNY3HIyOA2GmnPlZD4U9XsXmgfwVzkW7rx8P/GRLLgngrfy8p9j6oKOb/G279O5zD7T/xtuQ/Ec0+kMi/MiWXAbBXORbuvHw/8ZEsuCeCuci3dePh/4yE0U6F4PsAD+/n4gkZtOe1fXfiuwMIVZIG3l6BAt6fh83WvKqf6K8ImfSfxsGntfYjrnZwExfvvrQbM51qrW22zlHhIqx4rM2ZVAW2LPbOKZyuB/s7LWCIXgACyARvcPt8TPmbMZHAqjqb9yKRp0BGTzWiPPCWu4OpdDmrutfyEIIS3ySGs2K0CJTyq1JFOeI+N18gdbrHRIYcVCi1VTGRvibzeLiXns64j+GUbUTa5Zu6wCrvqN3VcNFcfWsBQRa4rDw6hpSgyqvnXsz0UkY+bsm+nAD+zZLuf8Z/chQO50/PgSx4chNuEQ7/vUTWdFEotq/bw6oVyL1p/z9+nAhMxhpXI2DNDfB4yZm/eE34Xfj1P3ZzsBlsaijWWEzfqM7MVMGAcf+xiNspTZwledI/s/Ry8MkBgcaYfmdIJkJ5NiSACXakKDvUMv19sjpfu5NFlBV6S/Oj6ASh6EUpRR2pqcNiMZXUJKx8aLGqNd9Heyi/Q6lZJ3mFjCTaOTLTirhZQBjsFj33xPcJTKIQtyuC++UfOoVifSGUezmY9VW2TS6doCodvhULtcyoafsBCPAvt5MBBa20WAWxe5I3KL2h500PoZhfXQAwRNhgNUd8QOiWeTgq13idRN2NYdrNCDeKmTr6SKhg4MYp91w573BwNdckiZtTUcHBMTpgZ7pTYezdSiwqEUYb3cCY6+/HPbd3+9ebcbk6+s59Rzi0URjoUO4yD7DSFTHS+O30cZYJT+nBcdqHLI0QHn8QkLAH1ws5r3CWeVtsrezjcmIA7HzHuanGZb1xD2LFLkOlaozwIoeZvUFFVZmtxIbWwGmNA8SkRjMoGl2zJlCNSUFAGnOPfCObMzn+TSI4YSaFHmZGeevBgHm9X3ZzrdLSjNyTR8cjjBpgwm59ukvEZZyyPwZRpYcQC9WnZAp2kV4Itbxcw8VfEqcSPeoEcX3xVSN/CVCAr/QC8HAt4E/zUyY1FQkZStfs8JF9+TqYPYRd2l2Yo92wYaJp1jCYF+m6j4bvsFkwS9IcJoE0XTYLOMbBJpvWpS/0I6ASQsvBNcmlebnPpKQ3d3KGqdu+kRIt4q4/LcQRYeKkdLqTps90dCbhFHNJwogfqBwCWkAuBa7fFy4Pfcd+atVJhlHMKfLzj1CW+Sq1s/3RTXJAV/5/gAADr3bt9QtKQPa0HYIXxggEn5/i3eO2HP8Y0K3Vk16lP5tgHsYKtYQ0ujH4GxckDIRZoBtLU0eF/n8HTbrM7cEoNsQnoFPuZsrT1ZYVWrWrROEDaoPrk3IO0ZtXvfjEob3GU9jckmz4U9GwUYZaxRCDlBIPYZ6NX3VXbOr2sa2k0bL/X/VRu2lwRmfesnT5vAtS78zHVci6xL9agdCDS0gG6AF6ABh1lNseG1n6eqrx/kpsK0Nv4DdsPUpcyMK2RdFNjsIHX+x3MFMuUyRpHolL8q/qTqlGHZimkhhMSbAf4SthAsQems63KyD+2vx5ULhOIpgBiAooDEfj8znSZMgLx+a0KiXrSwCNf7zpvplrOADe9uo8SY/Nr9G4Pa9s5Bhj061h7p0N4CTy3HJWHHwt1za28t/a4CJilkXn22F0J9vnwMBE6oz8ii+Qu6oJ8rhH0GJDJz4dG376M69TokbDoR6PnWAtpupK4oj4H/b9JgE0CYD7hU//lt+JvAvmZukL4ouKjEYLzDWHfVytFjebfqaMDkdsQRWCpfIFY+yl6xkehA4BVzGOo18p6EESLBwVBVetDdgqewsu5b904zdYpFN3fD18zq7IBkdiskzeoZ2DqrR2TK1xUfdmJJ/YtYiDS8+AAab0oCyIfAS+j6tuFRHGgZQ5InnXDndFrpHi4hGm4GZVZYTuMdhc7GQt0TWeBd6pPUoVr85LOyHwi+1ZdhRM9dr0JIaWy0PH2oi8Zt4T8NMj8m4G5vfnuvWcA0EkZg3IhZILV5v7WvG+fyeJgPFktRB3u7H2d77MKuPBB538BATKlGC1l51YAD8TXSaO7bidRRfd5g4jNuSFc8UwT4Nr/AoZGKn7Dv1Xy9p6nBiivF00Rmn4kjdqTg3HHmhShxLtNTizgTzOgIJRzHiv9gnciTUW7zMtkdzgQdBA0ihaTlEuT0irb0P36ZFkUIZ6RQQ6eZmBG3VJ3HTK5yrY2I74jLBxvVkIHz5q7OxIFWXNib653YX3CxuWI2K2YbY/Hbqg1jcjToaNrR73AbUQ5XfCqUCzpWLeT/LuHgf0YVIfJVL/WNYEIUkUHocjHoVUY8yvnMc92lxiSbYO57WQN5+KuKw1txdOmTwQf/J2nb6SWhxuFEidOIbsA7HuIGF8GrS52+UM3O6+PKvqAPbMYSb3DWKpAiCwK9Ognms2mHPkiv6tScHpHyh+WYwyFOPj44Jr7x/x0AlrWmOnJey7DQnVlhMTMrkCGuXhMjURL8Z2J4qiW8/FffGWa8lCUdzSiHUII7er6ahrwEDbPuMc2KxIDpX4AR7CHg2e1cVA+tdukinANE0vnQ/Ng6PEcvFqaT2krb3Kqqsh4JG+Q9GUm25N2lDQLEovQvdYDYZmUMkh0xTwmJWxJZQ2puAwUx7PmkS7imH+5ExbN/Lvi8R/kyPwI7Z7y8zpASBB5YXWc/4jz9YQwSUEzV1KUZzVH+mopEzAboBhZSXI9HMcdnx1e/0J4Y580FJhQ5zig6AmsFM3bC3bkrIZyy+x6RIYJVyDFjl0UqJiS9pcekUm0baQ0muiw5Tzi7lgvBGIKt6/1AVN/+YhjXhb32CI5r8Ek4uw0zsRlxd3XVfZ5NT+O1jNAmhHZy63LtglKpF+bT6/I4NNUU/FmODZGxpmUFR2y0wUPX+fJ6hEJqmW1DNlUaTzQRTeg0Eg+BVKXTZcMoxMAu5XQoU6wZbbFj2DjhuBN7DQw32qphI57LzGcGXrHcwLP9tDriPM5XAGs8gjYMZ7umaiYMDTxBoqBfeancyJiOv+ZBg1WC0C7LMTnC4BmjWkSMYC3cK8fUHqdhidOMC2r8sCc6pBnxrWQTS8au9tF3Lt91f8ipwTzBSqC314vuAGHKVxtFDy/2sda0FMJoy3i8rf5mC8+BrD3CQzJ+mD5dZPVPiK+H/Y72sg7k4XXksoH2PdPEHhXeAiLqxKiRt/jfgN912tdsDyK5wvvfU2cJsPA3xMKEOJsSlU+masAKeSb3r0IS4PuIo5m4mSJGfLfGRGkclwliRHbyZQdqSrl9i/GrJHDfY1pmo5Vz4JkEezz+zjUt0oD7W6TEtRiuGSV2GzLLmEwvrvMUG0Yo5/9vPDWxVeoPRexcA7s6lQfaOVja+J17UoMvvArGD4/A8lCxtEs36rIEpY5m49IGTifJ9/I+pmCGF0UIaqAPY4FglaVQQRlDKDScuPHRL/aoBefM7RY8oi0l3juP4Up4XCPEqDYC6dYVA7NEPTSKms5OihyacFWb+lZsrll59R1GIXYFwl33gc3iwrEQcVtSwvmPKuBlT5c1O2TcwrDZoeJGROb76qNb12WbUr9IZU1eJkARIPIPzq0xWp+ZPsV+7HGcwGpUxTdcdNtecFxqgWLRolXV3kNflCHajeVZPVMOo9ES0rUTVNxHE+A8+I11K38PufOg+s5GpnMNGT0AQVB9rVO8uHmu4eGbD4OcfyDVRxSAgNo7d1vvd46ToC1dsaG4vYxRpKM2BvrqjmGfYpUB/GYa+BlomFc1tLs3Y+OdKMfneqdvFPKZ63EYGpm72OOPhvizDmc2VT8N+6UWmWJ5A+pahJaeShW7jWMzVi7uXE1E8GMjvauJ399q+hr0XIP+uvo0mU939LihkshlXi61g6f7o3mNhtnJ6bivo68+zJMUFgohP89ItKYXYqmaZBEbBiPjzuCH0+ea5Uyw9F2CITC/W0mCD3is7iAqhXJL638TBW9+S3LOVO8NDsOFu+Ps0a+zPwt+202if8U/c6yovGFA7wzu+dCftD4vZ0WJlrHdeVAUfIkrZDfsazOe8aaa5KNvPDlPNtMj5E8aG/u7UIrahl4aDz2GkjoR32wRA5L0ZCwRBywO8vR7tbQdPDAQqfgDLb8l+WNeSEyb6BTFpkaV5cjK+bBKmva9sVBz5u7V3n/eyXcbU/iAM7/1vmsoI/bDqgysGbBW3GDZV8ZclTEzvSDCiBCKsrTk2zPgXqD/mF1yyVOePvgJcxNxXYTohsl1CkI6/sdw1VHaDyBk/lBpw5Y0YH3v08H/QW4MzCy6epZYncZtuQ/97J+PtPi8ZZ40DSKJR+eb1+8sLqqyVL7jeahL8hp9r8bFuMdfR7cnRMmOV2r/r3b7ipNdziopUvrPKhtsh7pvYL3JssZHcOPL6iOuJ8hvr60ay/dAvc6D5IIFhx1QRx36BEvr+N9xbnbKKeeDA/OBXGmh91700hUDq5xjVxrjktbh6r792ILBjo0/xVSern6bAyQ1DllquHeOlwUg2JpWuY/SaJfuAG0nmoeXEI8byQGlGv7xk4l3t6TOtPhyfyfJzsgfI28FBcyJMAk7r7DCWDrjBvDSbRsAiqm9KFMJxEf/vcWXQxlj0gH27LZ5ffRC87ngL9EJszVjuKj/lv7rxZAkMrg5O0+s3TnB37dGuTyJmVp0Q3fs0SKXVGRJuHVpa9fYOBRCVcxF8jO8OndoTeXzCOMaBrJo1q7MLfUGX3y3YT8thbxHW0ADCxH4CP3gLaLqKtrHMC9Sf3fK2uvPKBt2x/GDOVZKb0Mfn90XPb+E4epaDfZvgVo0uEVfekxb50GGW11kmNzGL15/GVM+pYMUSxgv8Q/UnlbYdavwTZDgTtPLfN8EipVsjR2OuSJIRH+LSHbBvdidBSgyI64iORJkUC+kG7mM078CXb7+4BhlWD20BIfQaCJDSvf+opzd02EF572vjooeyoVPRFQxIH+bmVuI5/Sxudyoi+FQVAyQFSzbo7z9rji1u88gbohh+HKqNqopNgocyd0LmvKsnGK28wfoRq+LMs7a4ZJjqCARZoNVARBoWrZjrW9nGSJm30MKG06oHZnSyhh+0ycsWjSeKrz55twvd2x8CbcPRcI3WffyNplXyvDboI0VbwOcpBkIs+5v9gnHrdbXtczty2MGucId4Sht1N6SzuDtYf+RUuReBSs9NUhhLNT+xreo9vgpwIbfQxgM6ce7HWQPJm3uiqJpj7rt3CmErWOw1sBivC/8CEQrx6Id2CDutdcmQGzzEPHauQAADXAbc9+ZTOXRfQxlaVg3LbKcv0r7wHhTeHowJ2SmIzY2813sTJzpX4WuGYmBePybZdpYNhDTy/6UCoAWJAUYJ6utlAtIrfQ3nbT73NukA856tOeKl2YvQmX7Bz9KLy+D9W3C1E2z0zf20X79Bc9cPrWV5blHWu4Ki+vAtBM4OCd5o/mivxxnsRp0GSOQRljWrQwzXFqOJZ7/uM6ejX8rZqWAWnZ75UiUmvRsiYsswsDIfNNKlGTbt3VZx6OAnlqDF0TCAor3q+Yls+obeHOK5bmgpapBXNp+xDpEh7FzXkQqhDYdRG0NUQiihA9D9kLwT9ybcyPepgVDb7maMICCCuYyJ/XbfRBGMe2v3HkRK88lxP27625NworZXPbmWtAP32csatQ7tHJsY5lkEVVXQyonRxXw92NakA1qW6/G0/XbnH1Zw8/t6lQmrWdAiS7tOS33JUeHZfwgLnHa6zyCm7nNvkr08c7q+qwPdgnZzDEVLLtobQKx5t9mEeeoERpJwNDyCzdxVC2rCTzBTCc0G7ErXHcTKbx3ytLzIURuiYuM8hVeuO0ByDk+z29HTvvZtXoe9/85e6sIS5OrHtrqAL+wiKVv8O9dQcNheRAwdcB/WQsU7M5PafACmLnL/f1xC+YLZf3/HJ6kYpFTYkFahsXzmy8YzIY63EtLWPZlBL8orBQS0fs0qZSylk3AExQxobfWveLnSmi363pH1TGHNzk+Ibmb4u7//5tnMzAbJJmvwaHPbGf+Nk60iHALkOXn4+M9XMGvrrpxge7GlOqIXhgJXIZK9YsLuIIy/icD1SwwV/X7KBK0Algo4g96eVfsIU5TFVpli7RQvZQ1FHarl88aS3Fo1GLMi4DRWue4VDIIi44z7cJvr9tI5sWtCSPz1oOOEIhsOp9ggGUFJDomyPdGNzfGwziW7f9Dd5bGyueoC/i9ROCXvN5im2msBk9qM53PSl1u4ru9cJBtOPPG/mq+vaQU9V98kgCxc0fEhfhCJNC2Y+dnhPSsFKSWMKs2snpylDZucXLsIvs2Dq3Dz9LiXYCK5jw/Jy2hTY6xNVeHywL6I0HembAL30CA/IK6VYAcAaliDwfIRVfESl5fBbUkpD2UTS1PA8noXEDK3jzf+2sBqi9Y71F5BMdail4pLPTcSeeFsBAlmdgawwjGKqU6cMbH8bHTXCqCNQVF4hl+EabiKknxDN9Iu+HSiOmFOzgVlEd/PTsYAiEMQZw5KS1Y1ig1SMPXUUOcdnfoiWdmw7wZC4v/oxTR/kJktr1rTL03QJ201P4lfNZXHkAdkVCy8kMK/BNtDXzsDDCsN4pKpwjaVCHBDRXZoESNFpEa2zSNZTXlnplVQjT4lNgDWHmFPTduNI0SxheII7OHWAgWAV/vKXnPnl9kvQIppN5lSCE0OXX+db+hf1u6Natl6saO0Z23e+xNLC0SfVsx39Uj6Sm9SczJEGyICJw0IIrNnRSIcU7V1Xmx9BVRB7wh8L7+bLdNfR/vnEDKYOfdg+LIvvtlOt2Gf9rwblIOCi8CKZWnzJwbp/F/7IbUXhT6DwVv4jujEoNyRRR+lSh/V7887YnKB1wHkSwjq6fhIuPYnMDJH1+Wvx8vmirUAB0iizqrd721Sw4TJ9ROTVaGCFDSDVlcLIvpmYlRHDdgzD50UCm6+objWj4m+FEa+gj3i7dQUFa0DYoQeqYyMEembElrMNi+6guT4Ad3qJGeSq2XL4NQjQWm8ECgTw1Gk1H4BbbUlQpjJuTOjWtWmhU+5sT/lLaQ3ZfWVIbRr2hiS8/opkvIi+hik707vxmsxK9FeVHF+WOO8ESeLTs7JYv53TGoAnGzHZqxtaf48y1K2nPEzkPr3nx1v8JcV7udPz78fgVhZD8161vLQaUx/KmUbVK6WyZvgCxM5QQeG40WpiKR2db8vg1c+ehW76Su7o8rcTxzc74kiUgH3SkdLITiiiYNd5dsd1Amfntn9mhD3vowgHfADDxIo8H2lrLiRt+6Wj8JGQhf2Hg02p3F7PD54UIs4B1Kj/lRGiLfDSfj3N+Sbx43NOeuBalC7wWVVK/Ey58CIz4sf/rcOpS35xjRNFg1MEdHP7NXdAj3baQ7gbEGH6NcsOe6BKMSFdZospN5idAn/v7f+FOn5D83dkziWjAgp4gA0MuvEQrdDcSRPSkBOysTGlVSuXYKKD1NpcqFN6im3PUoQycdP9+YV7tEBFYz7kmZ+Bqx4W0MvCAPDSgBV4CYi110cFmXHyDXldatCC7Cv2ajLficYDpPWAmKsPfr6sONfD52SiaAon+QcB/NOwA5mq4VL2GT2ilFbk/VglxxIk8zRXmitnchlZIIyxDfv3PpSTR13C6LzE27FG0Uh0mmL4o7a2LdzVIKj1QC2gb6NHnMTRCssO9IBcDPehR8HVC9/uF8fooBUCbvtPjrHoqBES8WyAbA4bKVVh/GT+YsGZgMHhHpos9/C3H5ZU9Nr2MHknkhLb2VELSQL1pxFYHBkqs5SkrEEAK85aJwPkBfaUzpWHEfGwBjRxfkypzNIQD/fdZFTDroizuVruiDT1O5sTujqozwyyG4/JEqzmynxv+VrM0fh7XY64BPS66OQpP4cdo6a0eC/AXeuHNrIi1jS3E9oX5dceLVimok7T8kRnccnWJ1OMzIO/3GqoTT+8Zd8dc0HXnuIqBbjPjn9VDy2O+t+Y7Ic+AtUWT+U2G1gMNIPVKDiWSxWoiSxZSBUuAABCSjQN3E+kpbKyjuEACw1FItyL8UpYrNKTpdRH7fWqWIjAM3JZAegiKNCGd0uL2MuANa4uPU5vOIg1eWiUt5RKzQBuFEqnn3VakQRPdomAn/joFazihwl2YCh+1mjKGpkKHMegBX3xtkEz35u/mzMhRrYyFkB6EuinDmwZxCaPXbUVkXbzPfTcC3M/6TF1vbHrcAmAbX2ABULVGxyCuVlCDYCMgYrkIHM8x7x+rtHneNNnkUWuBL3a0UdkuIdnn00xNtjgAqhQqX3TFON59iq1nJ0Lup63tlkR8VZrlOszD4ia8mu6SMMCFsWTZ1qJZwKddIEldi4H05j3I3lMmivAAwD7Z+NlwgS24HJrBFgKW5JN4kdXW/PN738TS+1WhA/gugR3AIxDgflJoqlLfkADVkr3IZCqoeG+/zlCqEMuNq6QwuJ5xjKA0ak3/0BPsuPXO7WT/xVLJ9YSvHlk/OxQUIiMiDGxK4jsdGwd8uR/xfo9gQWpMMNW2yyRXE1s67LpqsaqdQZWX+cuSYT2FpWojXbCi5LcsuiwitYifk558EJ1GkoE9Is2B+W7gmSu4Z58G0DgqDjVloNpyVV5BJQN924ckGylSZlcnWP43hFSBE7EmlX+33IYZ/AKe0/kU74h+QiNAW+bVXxVcaV8lY/3JcuUtMaDNT6kVE6oT0g61SefvBN59vr3FDI39n3JZrRTnK0V85RqrYmIV5GNJjZctJ9RsWFBbhAbE/qTdwZYuQbFt1IurqYEUxQhhEB5y59GXqswBJjCn9rLfe5QRK2aQr8yeXshf0TZzZC5QswJy+vcnSJ3E86OyXn7oW5xwZqTYPWQ+F9nLtTraTSJR2qsyQMx5vMzkU9r3WnMLzxCDq++O7fE7Ts5npgVn8A/vJfg8zTfSgjl7JBZfugiSaxiYuU9jO95WzdBovoVAAEiMG5ewImOZTA64HM2oVhHsYvVdxIrv4JfJo5s6iJcxZrY88o7SJjIH+3DYLndQEFpgHxpYCdGez5OevkNsCKOmu5KA2/3tz7vWNFJtiWiyB2RRDQbSWGm4LlMJWQiAAWyYgM4lf1OjgRDqBOR1FaIrVXCShaHD/UWqhuCTrxFfa0nxQZGaaHsKZ95ohDrBqtDO+7tYPooFW6yCdGmEtuOwa96SttdP5tBeTsmDMMMM00yDBY4LcjyxiPnDqv1cF85Ck9UljP8WTliDZPra/EwnygRBObiG5L9sjV434Ps6SYoYMLz6NCwI59Z/Ik4vB9LhIyzPA3YZEI7l3iptHczkrNbLQ6wTrhglnM+yFWfhlmOt1wnUxs/PQFFe5++27RRwyGTR5gH4fPblK17uA7AWI2++OHr/CU+bNB+J+39MzTHSESVpf/VuFYP2pncZVAZmsOoSV2hxdcEhYd21k0pwbNmOpqk/oE7O9P47SsauzgRmoaz/fwUw0nUc1KfPOH5dHmjoXri47pM6mz/GbrKOeOWMmPeblng/+SmbsDUZwICZTcP3V13lYR0d8XnsVSi1f+e9JHjZRj2YyLyRCPb4FCTr/IRw1v5WSsv/rsJB4z0CR7xArDhASbZI7fHFH6Dqawb3TnO1y9nbLjSEtVzxCY3XdNHjVGs/D1nM7J7kd09Lbeoq/CsyEwCDZndyg29rIokoIz6QspNHxCIcAWKR9PeDeS+KWS3Tph0Vw0nb4Uuro+bkwcywqWdlvZbIRy0Vk3s/KthPadELtIICwrO21JeKedaA9CcQKaEwB5Nw5RWLyRhKwAOXDjjnOn7fJgOAkUhvpfLNGnuFHvIQByrlnBpzvKNoWQx4b6sFWnxXkzjld7w6aVVbnbX/bx+di1EHWzYwNtak2ktTQRa5EgJ/neOdN4UoZ61iWlu20Wk9qctOG4pT4rNFYL3YUID4THIVyYFMclVd18PD9ywGp7g0LpyabmDuQ7tP1/LLdT1CE4SEAHk9IzHCLU17f90FzkakZueCUi81xJ3kW0WHZAraTrUfG4x7lTmDKgTCZA0t/4K3vkMMyepMt+LhJu2xlhWIWUE47FgGI/NML0L6SNwH1520ler3I79APsGSBKtjwYGNQNe+19Wsh2+SUozc1fbomJ90bF3pGH47jc2HE8pOunUETwBRvTkAGc7vr5WmsmRQ1xhgvUuLDT13IsNzGjxywgmxFp6Ld+Raw7FzqxIjc2NHgBvwGrB2fmYSw+o9MzgZlpHlDFeO8zYpsHUbJMp6OfPNpK8Ct0J8uJiIPpF5annqfZVO+HPneoiJ1pu61b13FCCkDhZk+KMLxXs1lIa3NmdPIvdnSwYyPM7LoEIwNiPNy4auQSzCBu+QAgIgag0zVkfTGRmyq2tRjqMu+6uSaEQtPtW83ouP0gzhmoNyRa23iGYj7RSIGxtPYECiUa25nx2/E0YB1rNZZolrGgEQSdd+1JiAw1xEaMTutaS34FuZEcjdLDRfekE8iZPa+mmm0Qc81CIgZWqqYfFNrQPEV5CCZ8sMNfsNeyqm1v5DzUmdaWpZW5gaYfZlwwsPguGuEq9qbQZxqF0CasUh8KZJ+uB51+jtHWTf7g5QDGJXnBQZXo+mofTBlyOn7vOiGX3jqXamwIPLERPSLNeGyJDeg3zXc4jDoAP7ZhZmf39yZk4D3XnKdw502Y/3dlxXrHrdPpAqGWitls0kZqbsjCFewyEdXw9NBmsoDQzGuB5zndE+QkHa0/BCMmprEV9KhVbYASNDFfMWy/u1CkvF4wpG6NYNJhwAK8pj3VqDcao2CUbWOCp7dODN1dw5eAlsECHM62BoUTfJ5OKmHUbrYmdopjWAfPzVHps6Fwce22AADhxnsAARzGAAAAAWtK40Q+P68wKSmcNucSI36lFPvZf6ignF7bmjVDhvjgx6fxz5kciotjFY8xv8tMl+AfjbQubHRN95uMtwOhMjZF0beRP461qn2ae0yMtykY9Am4VCSUSFJ7Ep1HSDDS+7KaPG2jGLR1x9N63iwIv295uAW27CZEd3KDWT8xPJu0Xc1PlenhaDtQUp3aCRcOY/VNnsdIgvXClvVnoJisPG6G63DVIaxCQ6O+AABryFsEbPZPpLlF8OFSVbj3+T3z8b+xJnYFN/GMxgzZl5Lb4zdGcKvKpjU4qjoVjySLynxKSdYeJnvCljFkbEccXGm6VX3eZufaLP2DEol85PLdmx09oeuPPog5YDarafDy7IUzKmw6nYh+UCMLdy/W0dIbsLXRP7ib2f4auTD35zuTlfHX1AVqG4IE03ReKb1RaHinlhrjb/CpgaFOwlE5K0DYcVg8tzu0StMrCeAVpN3OWORayve02J8+bcGzPusSCH14raoYOOvnPZbyqcxT/MRrkDTXs1Nkuemt9PQ91Ime6KNhFAi7TNXBELtCGh4ZH12Fs+jvukNPOq+5v8i6tKaRjv/UOu/jVvJ9sCvvIsGH2qHp8m9ZigwQQ3Mad28zBuSRaJ0hoAAWBDTo7pIH4vNqaRaByPj1hNFGanTW+G6OlKiPsodAnP2ut4pZS+u1FXj39BHnG60R2V554XQ7Zye5g6b2woXyk0QtorxmAttB4FSUWRlJxgybPjZ2cMUX++jWPaKIgkh/w3PRQ37N5JVKHj+tfQMut7ku2BlDxamhi90CKz3hu0EtvAFYL2//NB92fEhq7VGTP+Z+QeKqvOMPSTM6TPAeTYDKx0EOc350xOLObhhVW9RgeH2ucAjlPIHiaARIr69GqlnjjB3yEqgVqmDmmR9HtqpVduXB7C6uVR5FG9X2q036XNNBG9jpiXY7JCnlVYmmrFMJhKqN1UnJQbsVWi5dUPwnhhp1uzcuDqd81KTr/KUbTyeVm/OKXrANAmBTHV3NwIqUOFO8ADUWg2iPqFOs+fAT/D3fPO3wvjIyv9g6jd583gZ+Oz2t3HjPfmFI+w2Beki9iNJTAqe4RiaGBBsKLyORbTI+7cRoPRaFP1NFNJTU6kApUkCkfUQlrL0SUU2n2WVDbGkf3yQX2a7tA5LpT0xZUYYHxzjVy23ADzrLLUuXRvikzj9LV9ImCiZmqrfAIPnCWMbwlyc3oWboNP2fOaHCkpNox80W5wJ4AIellmqMi57aZB2JEQW0MHpv+CJw+S9t36MNq4EM16HhstmaPQ3KR20pZQJFIN1QaIFt+mEf0754su3FoU+kPiE5EZ5HWpgqBj0hjOPA2buuPTgp0GRJFud+za4izyRh0AiSmbzlZzeaj83dY+GoyevMPGM+q52EFXlja2WLoC+G5Zmd48mXPpec41shLKlMxL0Hc9snBtz/7JVLLG7FeCdneaWR2HbQfRXYYhiKsuysIQYmmn/LG8IPQwqlzUZ6Qw4JX8CPd4qhXj0bsfMVwq9WzbOdcGZSdKSQ96LXf9Rdc2hywJ1sXuFMt901mv6Oz8quUg7IeQuB6EADFKXuy4EubFbkUATM2r8lBhRz/xGpmcqPFjT1Ln6erjKvYLKnjjMMZePtA8/n2BIqJlithY9lOqkbivCIxYal1D2uMI+k1d49CgoXU/Q9KVFuN6cCI8o0fiRDHnYS8yGcx0kUm2utWTubHphs6V8utqdyhlHPmYYX9SZvx/5FmQPQTEygCQv6P2AR8qXH2fbK20uSqgC86nHATWteak+QGHvHLP83fEF+KbNyNp+PrUmt8MTAmSSDxuplvniilcPetRO8c5Vs1HlaGVCYcpOmlE/M8TJaDoEx5IAH4TFJFdrvnARFLJzkkSvxv/64VdHI8iUhI0EyMl9KjRT0qfqccHrxAxtdeXcyhwP9h0dUkbJPbUA5THgbKjqbDOIbAoorhnAGvXGKuNpz3ZLwrf7PtVKg7q9X4QXunpzsrSbh4dZBiXn2s4v/aLyiKuQdTj2YyaXqvDGiCqOfx+Daev/l776AlQQv6phPlZX+oWa6pb9+C4x+sMU4Jowm+J6Vb95bOvfuiqM8WBT0VmLSdQ11gF+vPzeIKDpco9r+jak5VNg14YdiH9xj55mOVXYoL/Vo6GCChoS7kTUtM3ssJSfTZkDuoj34jeI3+OBWsET1Hqll4Bi43tcgLWTaLLPf28z+lHH8brtO8zMVspOH2TWlMrUq31Yk3gTxWqjniNp/3H/sOba9mQBV14kwZ0OcMVBnHbtu8/X58EKOoKcd7VFtsAohj/+YpQzDCpx03J6C8QkDgXegfDvwozsW6h5TiGNJdiw3enBffRsW7Z49PhwK+qFaPD89DKu/jP0xBNbn47HHE3/wd1WM2m9p6zySxYtHHXTcYCJDW55r4TU4WTgGBAVMyNIo95/9/DTsjMObeudZDwpi9NGkGHahzhpv9iidXb7KnZGDaqi9SDGCihTPkTRY0f/HD71swXYM4mGq9mjoy5cmuC6jO9sJJ0JWuDcg1QL1I2TSvtOY0YGoTUxkNCKPtJxiKA3O838cN+w2rKVURmLNhvDKvSs58HEJKgYNabHB37QyU2PjjYx7qPp+AAKq1VldP6kAEvywcPS3KzrmpanYHyUqtD0Sr2suXhyxWBxHud+s5GCtMV04d7IRiTdXXwZvD2VFcrO8TtY132bnRMHUtWDUTvIB/bI2PHYB1Zrzd/8Px2K+4ngJ5GuMg+5dzFgLfxtGPykcLoOy5XJk9WG2tm72wZhpuZQWCyO25eHEiXQBBrCxKfJDGIo31DwpEh4jn7b+sfBFgSD+bqhwy4ODCHlhAFB1Dbi0MygAqCM4ChN0uxrpfEaMQxqKGtjUevTLbY6cv1YMUUxddXjhe90f2yyCE7Vi5A4ZVLJ0ylKGhfISyNekQfDL9YTI/PwaRcEUjFW8ouoeABXMHYS0Owy51gOxaouLFyjQe/QIzRKjnk3GohlZ3WMNR8l8tTswHOi6SHhAoy3/G+hl/vvi31CsSGmdNtCpINewb7ovYWE++XPkP48igy0pZCwKEVpCMeKkf1SZ5X5mAedS3pvcEa+fSCTwdOM5lDxqxxE77oEzFBKSGzcR7pDW974w7gvZFp7qfrydTGQ9vsXtVuhHG/P5y82kHUygPyMzvAryC1rNrHGPlJ/Jpsk5E6iOpkevWuj2ZVxlx2wZY/kwRI9kHdysD+lDRKMoq6cG/5lZSc4tSKyEgbMcZknQmWH8V6ZX7lcEJ4xLHTJgYawXVvJA8HJeZdgpIC18Efkg/KapllW7Up1Ty0IM9/fE+9LXaxhot0v29CSY2WfMWz1wUy02ltccRRux5R6KpfL24ZpGsg6+1Mi8ZIDLVPzYn9TPVLEdOpofFMmBWHXLNJh8AQwegHhCtWmDeNlBgbp6xceIaz7HW9hQ3Up8uYy0b8MkzgtfSaxyZbK2w/PKEQC34hCjXA+lbf8rFNXieY6mKRDyHcrlQYoCbXzHGs/4UPHGqSJ/g4lLzaZjx42eWaIetximFeItYsIY4+BpxorVwSb+/3yMJqccji2ktYiDG5u+cVjcmNAWQhwFRhU6pppRUz2a10wi/qEAQlpHdjKxm3aXO2hrZZ5lwxp0JtwTkttVaRbj4DQdLHG4P69eu5XC2l88xCFcDnAwb1d1rWXheA250IYbMEnsXolPY4tHlKvKSaGXpSZPwKiarM4vv44zWkATFGYS8kMTYww9k/P7UbAf2gssDGmiJauPNdskLIJNZxh4Z53Kdb8sqNHP+9keAxa/hgABHE6Q128jXFZA/0zLmopQeI/IN6E4muwW1HSCTQoNpmUybMfU/xkjep4UTdbcIAM37oEYz2E1pFCQZEfD5hIpbzcJw8i5dWtIDesms6QjNpV/EtJtIgUhAqJxP6Ybxc/sISSDaD2lkhBkw5WGSt/q6Rq2o9+VitAsaXYSb4RUycpezm9l8xO4eY4D3Dlk8yi1bdwihqFrcsc0PjLi14gaTp/ndu2mVhEWpU3CoFSZwHNkRIbHAQNc+vV+ufk6WbC0XG0830IBaMXdth5bgS9fgA0iV9UHLxDem4+6S+XksOWb/vl2w0IHoDr+KoYVguyZR2jxIamw7qtFg0/2IvZ/f9tE9yh8+X7r0hEtXms6hDi4Xvf93nJ9CRyF3mcuYSZRJvl7HRhp/m1qzRbg14+n0FU1N3eneBWEQ+nHN0S6wxSpBu49dwfY+MUxiQeQNz+q7CvlODFBKlbbSLgLNbTF0cLmKj0770hUS9ZLozvpKhU30Y9zFa4JmHvYMw0E5w/8ZNULdWEvwxQuthR51b7mvYpz4oONd1LyURXfjACI+eaWH6X5f+BJpkWR4foKV4+2hoTb6DhW4aJaeRkzaOI69OI8UQA71g1jH4tRPfhccHe+H2Ezk1s8jiejyKi4SzX5fDuhGz733HDlJwdL1SC13bJVF26W0Xspnjdc0/169yOeO2GM1rkMZYSfY45qNYEdXcU3X4nEsWGG1PblXpzpYagTioqO+euZQntmF2fg35m2kjVzUJWAMAAe7qGktwBsqGTL0vGL2qBIYE/snn9QAA8m2IxrQacVpHrQuLCADUAAAAARVhJRroAAABFeGlmAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAC8ZAQDoAwAALxkBAOgDAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAOQMAAAOgBAABAAAAdwEAAAAAAABYTVAgiAEAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTQwNDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj42Mzg8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K)


N: (Network) Mạng.

NC: Network Configuration ( Cấu hình của mạng ).

C: Channel ( Kênh ), tập hợp các tổ chức có vai trò nhất định trong cùng một quy trình kinh doanh. Ví dụ, trong một channel về mua bán xe hơi sẽ gồm có 2 tổ chức là : Nhà sản xuất xe hơi, Nhà phân phối xe hơi.

CC: Channel Configuration ( Cấu hình của kênh ).

R: Organization ( Tổ chức ).

O: Orderer Node: Nếu như trong Publuc Blockchain, tất cả các node của mạng đều tham gia vào quá trình đồng thuận, thì ở Hyperledger Fabric chỉ có Orderer tham gia vào quá trình đó.

P: Peer, là điểm tương tác giữa các thành viên trong tổ chức tương ứng với kênh, mọi hành động của người dùng đều phải đi qua peer.

S: Smart Contract (Chaincode) được cài đặt trên kênh, định nghĩa rõ các struct, các hành động mà người dùng có thể thực hiện để tương tác trạng thái của struct được lưu trong sổ cái. Ví dụ 1 struct như sau
```
type Car struct {
	CarID                string
    OwnerID              string
	Description          string
}
```
L: Ledger ( Sổ cái ), lưu trữ trạng thái của các đối tượng.
```
car01 := Car{CarID: "Merc", OwnerID: "thienthangaycanh", Description: "ABC" }
```
CA : Certificate Authority, phát hành identity cho người dùng hoặc node của tổ chức tương ứng. Ví dụ, người dùng A là thành viên của Tổ chức R1, khi muốn tham gia vào mạng thì sẽ gửi yêu cầu đến CA1, sau đó CA1 sẽ tạo ra một identity gồm private-key, public-key và các đặc tính liên quan khác, sau đó trả về cho người dùng A, từ đó về sau A dùng identity đó để thực hiện các tương tác với mạng, mạng sẽ tự động biết đó là người dùng A đến từ tổ chức R1.

A: Application, ứng dụng hay giao diện (web, mobile app ) giúp người dùng tương tác với hệ thống dễ dàng hơn.



# Tạo NFT trên Hyperledger Farbic 
## Cài Hyperledger Farbic : https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html
```
sudo su 
curl -sSL https://bit.ly/2ysbOFE | bash -s
cd fabric-samples/test-network
./network.sh up createChannel -ca -c mychannel -s couchdb 

git clone https://github.com/ducthanh98/learn-hyperledger

./network.sh deployCC -ccn token_erc721 -ccp /root/learn-hyperledger/chaincode-javascript -ccl javascript
```
## Mint NFT
```
cd ./application
npm install
npm link
cd ./src/enroll
rm -rf ../../wallet/*
node enrollAdmin.js Org1
node registerEnrollUser.js Org1 minter
node enrollAdmin.js Org2
node registerEnrollUser.js Org2 recipient

minty mint ~/art.txt --name "Art #1" --description "This serves as proof-of-ownership."
minty show <tokenId> -a

# Transfer 
export MINTER="x509::/OU=org1/OU=client/OU=department1/CN=minter::/C=US/ST=North Carolina/L=Durham/O=org1.example.com/CN=ca.org1.example.com"
export RECIPIENT="noExistOwner"
minty transfer 1641904109263 "$MINTER" "$RECIPIENT"
```
## Loyalty
```
cd /root/learn-hyperledger/loyalty-application
./network.sh deployCC -ccn customer_loyalty -ccp /root/learn-hyperledger/chaincode-javascript-loyalty -ccl javascript

- Create User 
node src/index.js create thanhld
- Earn point
node src/index.js earn 1654659364799 50
- Get user point 
node src/index.js get 1654659364799

```

# [Cập nhật chaincode](https://hyperledger-fabric.readthedocs.io/en/release-2.2/deploy_chaincode.html?highlight=smart%20contract#upgrading-a-smart-contract)