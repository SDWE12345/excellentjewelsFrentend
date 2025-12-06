import React, { memo, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PolicySidebar from './PolicySidebar';

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="education_diamond_wrap policies_wrapper pt80 pt40-md pb100 pb0-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg ff_Title text-capitalize">
            Shipping <span className="text_colorC"> Policy</span>
          </h3>
          <Row>
            <Col xxl={2} md={3}>
              <PolicySidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <ul>
                  <li>
                    We ship worldwide & we make sure that you get your shipment
                    as early as possible provided there is no delay in
                    customs clearance, public holidays, courier location, or
                    any circumstance beyond our control.
                  </li>

                  <li>
                    We ship through reputed and standard shipping partners for
                    both domestic and international shipments. Once the product
                    is dispatched, the tracking number will be updated in the
                    buyer’s order details.
                  </li>

                  <li>
                    <strong>Domestic Delivery Timeline:</strong>
                    Orders within India are typically delivered within
                    <strong>3–5 business days</strong> from the date of dispatch.
                  </li>

                  <li>
                    <strong>International Delivery Timeline:</strong>
                    International orders typically take
                    <strong>7–12 business days</strong> depending on the destination country,
                    customs clearance, and courier availability.
                  </li>

                  <li>
                    We don't charge any sales tax/import duties/taxes on
                    international orders. Buyers are responsible for all import
                    duties/taxes levied by their respective countries.
                  </li>

                  <li>
                    Shipping fees are not refundable under any circumstances.
                  </li>

                  <li>
                    We use logistics partners such as FedEx, UPS, Malka Amit JK,
                    depending on the destination country and product value.
                  </li>

                  <li>
                    Import duties, taxes and charges are not included in the
                    item price or shipping charges. These charges are the buyer’s
                    responsibility.
                  </li>

                  <li>
                    If goods are held by customs at the destination country for
                    any reason, the buyer is responsible for providing all
                    required documents or information to clear the shipment.
                  </li>

                  <li>
                    By placing an order, you confirm that you understand the
                    import regulations of your country and have the required
                    documents to clear the goods from customs.
                  </li>

                  <li>
                    Indian merchants are not permitted to undervalue shipments or
                    mark international packages as "gifts." Government regulations
                    prohibit such practices.
                  </li>
                </ul>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
export default memo(ShippingPolicy);
