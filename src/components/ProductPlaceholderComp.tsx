import { Col, Card, ButtonGroup, Placeholder } from 'react-bootstrap'

export default function ProductPlaceholderComp() {
    return (
        <Col className="p-2">
            <Card>
                <Placeholder as={Card.Body} animation='glow'>
                    <Placeholder as={Card.Img} src='/productPlaceholder.png' animation='glow' />

                    <Placeholder as={Card.Title} animation='glow'>
                        <Placeholder xs={6} />
                    </Placeholder>

                    <Placeholder as={Card.Subtitle} className="text-muted" style={{ fontSize: '12px' }} animation='glow'>
                        <Placeholder xs={6} />
                    </Placeholder>

                </Placeholder>

                <Placeholder as={ButtonGroup} size="sm" className="p-2" animation='glow'>
                    <Placeholder.Button variant="primary" xs={6} />
                    <Placeholder.Button variant="outline-primary" xs={6} />
                </Placeholder>
            </Card>
        </Col>
    )
}


