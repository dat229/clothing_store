const product_01_image_01 = require('../images/products/product-01 (1).jpg')
const product_01_image_02 = require('../images/products/product-01 (2).jpg')
// const product_01_image_03 = require('../images/products/product-01 (3).jpg')

const product_02_image_01 = require('../images/products/product-02 (1).jpg')
const product_02_image_02 = require('../images/products/product-02 (2).jpg')

const product_03_image_01 = require('../images/products/product-03 (1).jpg')
const product_03_image_02 = require('../images/products/product-03 (2).jpg')

const product_04_image_01 = require('../images/products/product-04 (1).jpg')
const product_04_image_02 = require('../images/products/product-04 (2).jpg')

const product_05_image_01 = require('../images/products/product-05 (1).jpg')
const product_05_image_02 = require('../images/products/product-05 (2).jpg')

const product_06_image_01 = require('../images/products/product-06 (1).jpg')
const product_06_image_02 = require('../images/products/product-06 (2).jpg')

const product_07_image_01 = require('../images/products/product-07 (1).jpg')
const product_07_image_02 = require('../images/products/product-07 (2).jpg')

const product_08_image_01 = require('../images/products/product-08 (1).jpg')
const product_08_image_02 = require('../images/products/product-08 (2).jpg')

const product_09_image_01 = require('../images/products/product-09 (1).jpg')
const product_09_image_02 = require('../images/products/product-09 (2).jpg')

const product_10_image_01 = require('../images/products/product-10 (1).jpg')
const product_10_image_02 = require('../images/products/product-10 (2).jpg')

const product_11_image_01 = require('../images/products/product-11 (1).jpg')
const product_11_image_02 = require('../images/products/product-11 (2).jpg')

const product_12_image_01 = require('../images/products/product-12 (1).jpg')
const product_12_image_02 = require('../images/products/product-12 (2).jpg')

const products = [
    {
        title: "Đồ điện tử 01",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "do-dien-tu-01",
        size: ["s", "m", "l", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 02",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "blue"],
        slug: "do-dien-tu-02",
        size: ["s", "m"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 03",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange", "yellow"],
        slug: "do-dien-tu-03",
        size: ["m"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 04",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "orange", "blue"],
        slug: "do-dien-tu-04",
        size: ["xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 05",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "pink"],
        slug: "do-dien-tu-05",
        size: ["xxl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 06",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-thun",
        colors: ["black"],
        slug: "do-dien-tu-06",
        size: ["s", "m", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 07",
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "orange", "blue"],
        slug: "do-dien-tu-07",
        size: ["l", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 08",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "black"],
        slug: "do-dien-tu-08",
        size: ["s", "m", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 09",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "do-dien-tu-09",
        size: ["m"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 10",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-10",
        size: ["l"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 11",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "do-dien-tu-11",
        size: ["s", "m", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 12",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "quan-jean",
        colors: ["blue"],
        slug: "do-dien-tu-12",
        size: ["s", "m", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 13",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red"],
        slug: "do-dien-tu-13",
        size: ["s", "m", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 14",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "blue"],
        slug: "do-dien-tu-14",
        size: ["s", "m"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 15",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["red", "blue"],
        slug: "do-dien-tu-15",
        size: ["xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 16",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-somi",
        colors: ["blue", "black"],
        slug: "do-dien-tu-16",
        size: ["m", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 17",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "do-dien-tu-17",
        size: ["s", "l", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
    {
        title: "Đồ điện tử 18",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "do-dien-tu-18",
        size: ["s", "m", "l", "xl"],
        description: "Với rất nhiều quý khách hàng khi muốn mua một chiếc máy tính phục vụ cho như cầu công việc, học tập hay giải trí… khách hàng thường sẽ không thể đưa ra những lựa chọn đầu tiên nếu không có sự tư vấn từ người quen hoặc đội ngũ nhân viên bán hàng. Những thắc mắc, đắn đo khi lựa chọn một nơi uy tín, một nơi có thể trao trọn niềm tin cũng như tiền bạc.<br><br><br>Hiểu được vấn đề đó chúng tôi, CÔNG TY TNHH THƯƠNG MẠI TCC HOÀNG HƯNG. Luôn cố gắng làm tốt nhất có thể mọi khâu. Nhập hàng ( nhập loại 1, đắt hơn một chút, nhưng nguyên bản, chưa sửa chữa, máy đẹp, mọi thứ ổn ) <br><br><br>Kiểm tra máy khi nhập về ( bỏ ra vệ sinh, tra lại keo tản nhiệt, làm sạch bụi bẩn, và quan trọng hơn cả là kiểm tra hàng còn nguyên bản hay không, nếu đã bị sửa chữa thì trả lại luôn nhà cung cấp chứ không nhập bất chấp ), Giao bộ phận dán mã vạch. ( làm như vậy thì sẽ kiểm soát tốt được khâu kho bãi ) <br><br><br>Giao xuống bộ phận kinh doanh và maketing ( đưa thông tin tới khách hàng. Các bạn đã được học về dòng máy đó, cách sử dụng, cách cài đặt, cách tư vấn phù hợp với nhu cầu khách hàng. ) Bộ phận bảo hành. ( đây là khâu mà LAPTOP TCC đặc biệt lưu tâm, vì thực sự tâm lý khách hàng không ai muốn mua máy về mà phải mang đi bảo hành, nhưng đồ điện tử không biết được trước, không hãng nào dám đảm bảo không có lỗi phát sinh khi sử dụng, nếu không có lỗi phát sinh, đã không có những trung tâm bảo hành của hãng, Lỗi có thể đến từ phía sản xuất, đến từ phía khách hàng, nhưng LAPTOP TCC luôn cố gắng làm hài lòng tất cả khách hàng của mình) <br><br><br>"
    },
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData